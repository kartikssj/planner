import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
  req.getConnection(con => {
    con.query('SELECT * FROM users WHERE id=?', [req.session.userid], (err, results) => {
      if (err) {
        return res.status(500).json({error: err});
      }
      if (results.length === 0) {
        return res.status(404).json({error: 'User not found!'});
      }
      const user = results[0];
      const minutes = user.hours.split(',').map(hour => parseInt(hour) * 60);
      con.query('SELECT * FROM tasks WHERE userid=? AND (freq_minutes != null OR last_done is NULL)', [req.session.userid], (err, tasks) => {
        if (err) {
          return res.json({error: err});
        }
        const days = [];
        for (let i = 0; i < 7; i++) {
          const date = getDate(i);
          const planned = planTasks([...tasks], minutes[date.getDay()], []);
          days.push({
            date,
            tasks: planned,
          });
          tasks = tasks.filter(task => planned.indexOf(task) < 0);
        }
        return res.json(days);
      })
    });
  });
});


const timeFactor = 30;
function getDeadlineFactor(task) {
  // minutes led to deadline, can be negative
  const deadline = getMinutesToDeadline(task);
  // minutes before deadline where priority is zero
  const zeroScoreMinutes = task.time_minutes * timeFactor;
  // deadline is already gone - highest priority
  if (deadline < 0) {
    return 1.0
  }
  // deadline is more than zero score minutes away
  if (deadline > zeroScoreMinutes) {
    return 0.0
  }
  return (zeroScoreMinutes - deadline) / zeroScoreMinutes
}

function getMinutesToDeadline(task) {
  const now = new Date().getTime() / 60000;
  if (task.freq_minutes > 0) {
    const lastdone = new Date(task.last_done ? task.last_done : task.starting).getTime() / 60000;
    const nextDeadline = lastdone + task.freq_minutes;
    task.deadline = nextDeadline;
    return nextDeadline - now;
  } else {
    const deadline = new Date(task.deadline).getTime() / 60000;
    return deadline - now;
  }
}

function getScore(task) {
  if (!task.score) {
    task.score = (
        (task.result_positive / 5) +
        (task.result_negative / 5) +
        getDeadlineFactor(task)
      ) / 3;
  }
  return task.score;
}

function getTotalScore(tasks) {
  return tasks.reduce((total, task) => {
    return total + getScore(task);
  }, 0);
}

function planTasks(tasks, minutes, selected) {
  if (minutes === 0 || !tasks.length) {
    return selected;
  }
  const next = tasks.pop();
  const canSelect = next.time_minutes <= minutes;
  if (canSelect) {
    const ifSelected = planTasks(tasks, minutes - next.time_minutes, [...selected, next]);
    const ifNotSelected = planTasks(tasks, minutes, selected);
    if (getTotalScore(ifSelected) > getTotalScore(ifNotSelected)) {
      return ifSelected;
    } else {
      return ifNotSelected;
    }
  } else {
    return planTasks(tasks, minutes, selected);
  }
}

function getDate(i) {
  const today = new Date();
  const ith = new Date();
  ith.setDate(today.getDate() + i);
  return ith;
}

export default router;
