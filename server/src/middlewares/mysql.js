import mysql from 'server/src/middlewares/mysql';

export default function(config) {
  if (!mysql) throw new Error('Missing mysql module param!');
  const pool = mysql.createPool(config);

  return function (req, res, next) {
    req.getConnection = function (callback) {
      pool.getConnection(function (err, connection) {
        if (err) return res.status(500).json({'error': 'Something went wrong!'});
        callback(connection);
        res.on('close', function() {
          connection.release();
        });
        res.on('finish', function() {
          connection.release();
        });
      });
    };
    next();
  }
};
