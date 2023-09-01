import { authorControllers } from '@/controllers';
import { Router } from 'express';

const authorRouter = Router();

// GET -> all author
authorRouter.get('/', authorControllers.getAllAuthor);

// POST -> create an author
authorRouter.post('/create', authorControllers.createAuthor);

export default authorRouter;
