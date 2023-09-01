import { bookController } from '@/controllers';
import { Router } from 'express';

const bookRouter = Router();

// GET -> all author
bookRouter.get('/', bookController.getAllBooks);

// POST -> create an author
bookRouter.post('/create', bookController.createBook);

export default bookRouter;
