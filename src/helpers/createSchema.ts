import mongoose from 'mongoose';
import { ISchemaType } from '../interfaces/interface';
const Schema: ISchemaType = mongoose.Schema;

const CreateSchema = (schema: any) => {
  const schem: any = new Schema(schema, { timestamps: true });
  schem.method('toJSON', function () {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return schem;
};
export { CreateSchema };
