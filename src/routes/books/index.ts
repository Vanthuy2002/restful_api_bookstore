import { bookController } from '@/controllers';
import { Router } from 'express';

const bookRouter = Router();

// GET -> all author
bookRouter.get('/', bookController.getAllBooks);

// POST -> create an author
bookRouter.post('/create', bookController.createBook);

// GET -> a book
bookRouter.get('/:id', bookController.getDetailsBook);

// PATCH -> update a book
bookRouter.patch('/:id', bookController.updateBooks);

export default bookRouter;
