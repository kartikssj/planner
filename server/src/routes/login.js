import express from 'express';
const router = express.Router();

router.post('/', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (req.session.userid) {
    return res.status(204).end();
  }
  req.getConnection(con => {
    con.query('SELECT * FROM users WHERE username=? AND password=?', [username, password], (err, results) => {
      if (err) {
        return res.json({error: err});
      }
      if (results.length === 0) {
        req.session.regenerate(err => {
          err && res.clearCookie('psid');
        });
        return res.status(401).json({error: 'Invalid credentials!'});
      }
      req.session.userid = results[0].id;
      return res.status(204).end();
    })
  })
});

export default router;