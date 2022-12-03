import { User } from '../../models';

const userAuth = async (req, res, next) => {
  const user = await User.findOne({
    _id: req.user.id,
    active: true,
  });

  if (!user)
    return res.status(403).send({
      success: false,
      unAuthorized: true,
      message: 'Unauthorized',
    });
  else {
    const data = user.toObject();
    data.role = 'user';

    req.user = data;
    next();
  }
};

export default userAuth;
