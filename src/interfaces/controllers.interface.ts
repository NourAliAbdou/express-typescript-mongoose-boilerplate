import { Request, Response } from 'express';

interface IAuthControllerType {
  UserLogin: (req: Request, res: Response) => void;
  UserRegister: (req: Request, res: Response) => void;
}
interface IUserControllerType {
  UserProfile: (req: Request, res: Response) => void;
  UserUpdate: (req: Request, res: Response) => void;
}
export { IAuthControllerType, IUserControllerType };
