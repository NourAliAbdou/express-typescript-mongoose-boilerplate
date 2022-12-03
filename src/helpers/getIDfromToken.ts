const jwt_decode = require('jwt-decode');

export const getIDfromToken = req => {
  const token = req.body.token;
  return jwt_decode(token).id;
};
