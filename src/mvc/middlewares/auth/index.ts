const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.body.token;

  if (token) {
    req.token = token;
    jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
      if (err) {
        err.message = 'Please, Login.';
        return res.status(403).send({
          success: false,
          message: 'Please, Login.',
        });
      }
      req.user = decoded;
      console.log(decoded);
      next();
    });
  } else {
    return res.status(403).send({
      success: false,
      unAuthorized: true,
      message: 'Unauthorized',
    });
  }
};

export default auth;
