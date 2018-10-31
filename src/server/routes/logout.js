import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  req.session.regenerate(err => {
    err && res.clearCookie('psid');
  });
});

export default router;
