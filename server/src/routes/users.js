import express from 'express';
const router = express.Router();

router.get('/:uuid', function(req, res) {
  const uuid = req.params.uuid;
  req.getConnection(function(con) {
    con.query('SELECT * FROM users WHERE id=?', [uuid], function(err, results) {
      if (err) {
        return res.json({error: err});
      }
      if (results.length === 0) {
        return res.status(404).json({error: 'Not found!'})
      }
      return res.json(results[0]);
    })
  })
});

export default router;
