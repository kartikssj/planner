import express from 'express';
const router = express.Router();

function getUser(req, res) {
  req.getConnection(con => {
    con.query('SELECT * FROM users WHERE id=?', [req.session.userid], (err, results) => {
      if (err) {
        return res.status(500).json({error: err});
      }
      if (results.length === 0) {
        return res.status(404).json({error: 'Not found!'});
      }
      return res.json(results[0]);
    })
  })
}

function validateUser(user) {
  if (!user.username || !user.password || !user.hours) {
    return "Invalid input!"
  }
  const parts = user.hours.split(",");
  if (parts.length !== 7) {
    return "Need hours for all 7 days";
  }
  parts.map(hour => {
    if (isNaN(parseInt(hour))) {
      return "Invalid hour value";
    }
  })
}

router.get('/me', (req, res) => {
  return getUser(req, res);
});

router.post('/me', (req, res) => {
  const msg = validateUser(req.body);
  if (msg) {
    return res.status(400).json({error: msg});
  }
  const id = req.session.userid;
  const username = req.body.username;
  const password = req.body.password;
  const hours = req.body.hours;
  req.getConnection(con => {
    con.query('UPDATE users SET username=?, password=?, hours=?, updated=NOW() where id=?', [username, password, hours, id], (err, results) => {
      if (err) {
        return res.status(500).json({error: err});
      }
      return getUser(req, res);
    })
  })
});

export default router;
