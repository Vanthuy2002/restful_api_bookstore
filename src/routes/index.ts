import authorRouter from './author';
import { Express } from 'express';

const useRouter = (app: Express) => {
  app.use('/v1/author', authorRouter);
};

export default useRouter;
