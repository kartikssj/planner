
export default (req, res, next) => {
  const whitelist = [
    '/api/v1/login',
    '/api/v1/logout',
    '/api/v1/status',
  ];
  if (whitelist.indexOf(req.path) === -1) {
    if (!req.session.userid) {
      return res.status(401).json({error: 'Unauthorized!'});
    }
  }
  next();
}
