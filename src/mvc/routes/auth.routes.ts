import express from 'express';
import { authController } from '../controllers';
import { Routes } from './routesStrings';
const router = express.Router();

router.post(Routes.login, authController.UserLogin);
router.post(Routes.register, authController.UserRegister);

export default router;
