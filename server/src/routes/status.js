import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
  if (req.session.userid) {
    return res.status(204).end();
  } else {
    return res.status(401).end();
  }
});

export default router;