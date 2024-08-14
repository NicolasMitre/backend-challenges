import express, { Application } from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { userRouter } from './infrastructure/routes/userRoutes';
import { projectRouter } from './infrastructure/routes/projectRoutes';
import { taskRouter } from './infrastructure/routes/taskRoutes';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/tasks', taskRouter);

mongoose.connect('mongodb://localhost:27017/backend-challenge').then(() => {
  console.log('Connected to MongoDB'); //improve this with a logger
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err: any) => {
  console.error('Error connecting to MongoDB', err);
});