import { Request, Response } from 'express';
import { AuthorsModel, BooksModel } from '@/Model';
import { statusCodes } from '@/utils/contants';

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BooksModel.find().exec();
    res.status(statusCodes.OK).json({ books });
    return books;
  } catch (error) {
    res.status(statusCodes.NOT_FOUND).json({ error });
  }
};

const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = await BooksModel.create({ ...req.body });
    await newBook.save();
    if (req.body.authorId) {
      const auth = await AuthorsModel.findById(req.body.authorId);
      await auth?.updateOne({ $push: { booksId: newBook._id } });
    }
    res.status(statusCodes.CREATED).json({ book: newBook });
    return newBook;
  } catch (error) {
    res.status(statusCodes.SERVER).json({ error });
  }
};

const bookController = { getAllBooks, createBook };
export default bookController;
