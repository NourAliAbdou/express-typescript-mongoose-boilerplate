import mongoose from 'mongoose';

type IDBType = {};
type ISchemaType = typeof mongoose.Schema;

interface IUser {
  name: String;
  email: String;
  mobile: String;
  password: String;
}
export { IDBType, ISchemaType, IUser };
