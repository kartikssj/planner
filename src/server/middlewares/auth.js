
export default (req, res, next) => {
  const whitelist = [
    '/v1/login',
    '/v1/logout',
    '/v1/status',
  ];
  if (whitelist.indexOf(req.path) === -1) {
    if (!req.session.userid) {
      return res.status(401).json({error: 'Unauthorized!'});
    }
  }
  next();
}
