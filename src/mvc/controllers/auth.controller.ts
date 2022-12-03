import { Request, Response } from 'express';
import { transStrings } from '../../init/locales';
import { User } from '../models';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
 
const UserLogin = (req: Request | any, res: Response) => {
  return User.findOne({
    email: req.body.mobile,
  }).then(function (user: any, err: any) {
    if (err) throw err;

    if (!user) {
      res.status(403).json({
        success: false,
        message: req.i18n.t('simpleStringWithVariable', {
          variable1: '3',
          variable2: '3',
        }),
      });
    } else if (user) {
 
      bcrypt.compare(req.body.password, user.password, function (err, compRes) {
        if (!compRes) {
          res.status(403).json({
            success: false,
            message: 'Ops! wrong Password!',
          });
        } else {
          const payload = {
            id: user._id,
            role: 'user',
          };
          const token = jwt.sign(payload, process.env.JWT_KEY);
          User.findById(user._id, function (err, result) {
            res.status(200).send({
              success: true,
              token: token,
              user: {
                id: result._id,
                name: result.name,
                email: result.email,
                mobile: result.mobile,
              },
            });
          });
        }
      });
    }
  });
};
const UserRegister = (req: Request | any, res: Response) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
    created_at: new Date(),
  });

  return req.body?.name
    ? user
        .save()
        .then(() => {
          const payload = {
            id: user._id,
            roleL: 'user',
          };

          const signtoken = jwt.sign(payload, process.env.JWT_KEY);
          res.status(200).send({
            success: true,
            message: req.t(transStrings.registeredsuccessfully, {
              name: user.name,
            }),
            user: user,
            token: signtoken,
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).send({
            success: false,
            message: req.t(transStrings.useralreadyexists),
            error: err,
          });
        })
    : res.status(500).send({
        success: false,
        message: 'Check your data',
        error: {},
      });
};

export { UserLogin, UserRegister };
