import { Express } from 'express';
import authorRouter from './author';
import bookRouter from './books';

const useRouter = (app: Express) => {
  app.use('/v1/author', authorRouter);

  app.use('/v1/book', bookRouter);
};

export default useRouter;
