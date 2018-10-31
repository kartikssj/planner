import mysql from 'mysql';

export default function(config) {
  if (!mysql) throw new Error('Missing mysql module param!');
  const pool = mysql.createPool(config);

  return function (req, res, next) {
    req.getConnection = function (callback) {
      pool.getConnection(function (err, con) {
        if (err) {
          console.log("MySQL Error!", err);
          return res.status(500).json({'error': 'Something went wrong!'});
        }
        callback(con, err);
        res.on('close', function() {
          con.release();
        });
        res.on('finish', function() {
          con.release();
        });
      });
    };
    next();
  }
};
