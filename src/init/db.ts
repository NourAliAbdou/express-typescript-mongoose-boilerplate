import mongoose from 'mongoose';

export default () => {
  const mongoString = 'mongodb://localhost:27017/test';

  mongoose.connect(mongoString, {}, (error: any) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database Connected');
    }
  });
};
