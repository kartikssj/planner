import express from 'express';
import uuid from 'uuid';
const router = express.Router();


router.get('/', function(req, res) {
  req.getConnection(con => {
    con.query('SELECT * FROM tasks WHERE userid=?', [req.session.userid], (err, results) => {
      if (err) {
        return res.json({error: err});
      }
      return res.json(results);
    })
  });
});

router.post('/', function(req, res) {
  const msg = validateTask(req.body);
  if (msg) {
    return res.status(400).json({error: msg});
  }
  const id = uuid.v4();
  req.getConnection(con => {
    con.query('INSERT INTO tasks VALUES (?,NOW(),NOW(),null,?,?,?,?,?,?,?,?,?,?,null)',
      [
        id,
        req.session.userid,
        req.body.title,
        req.body.time_minutes,
        req.body.deadline,
        req.body.result_positive,
        req.body.result_negative,
        req.body.time_window_from,
        req.body.time_window_to,
        req.body.freq_minutes,
        req.body.starting,
      ],
      err => {
        if (err) {
          return res.json({error: err});
        }
        getTask(id, req, res, task => {
          return res.json(task);
        });
      }
    )
  });
});

router.get('/:uuid', function(req, res) {
  getTask(req.params.uuid, req, res, task => {
    return res.json(task);
  });
});

router.delete('/:uuid', function(req, res) {
  getTask(req.params.uuid, req, res, task => {
    req.getConnection(con => {
      con.query('DELETE FROM tasks WHERE id=? AND userid=?', [req.params.uuid, req.session.userid], err => {
        if (err) {
          return res.status(500).json({error: err});
        }
        return res.json(task);
      });
    });
  });
});

function getTask(id, req, res, cb) {
  req.getConnection(con => {
    con.query('SELECT * FROM tasks WHERE id=? AND userid=?', [id, req.session.userid], (err, results) => {
      if (err) {
        return res.status(500).json({error: err});
      }
      if (results.length === 0) {
        return res.status(404).json({error: 'Task not found!'});
      }
      return cb(results[0]);
    })
  })
}

function validateTask(task) {
  if (!task.title) {
    return "Invalid title";
  }
  if (!task.time_minutes || isNaN(parseInt(task.time_minutes))) {
    return "Invalid minutes";
  }
  if (!task.deadline) {
    return "Invalid deadline";
  }
  if (!task.result_positive || !task.result_positive) {
    return "Invalid deadline";
  }
}

export default router;
