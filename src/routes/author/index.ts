import { authorControllers } from '@/controllers';
import { Router } from 'express';

const authorRouter = Router();

// GET -> all author
authorRouter.get('/', authorControllers.getAllAuthor);

// POST -> create an author
authorRouter.post('/create', authorControllers.createAuthor);

// GET -> an author
authorRouter.get('/:id', authorControllers.getDetailsAuthor);

// PATCH -> update an author
authorRouter.patch('/:id', authorControllers.updateAuthor);

export default authorRouter;
