import { Request, Response } from 'express';
import { AuthorsModel, BooksModel } from '@/Model';
import { statusCodes } from '@/utils/contants';

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BooksModel.find().exec();
    res.status(statusCodes.OK).json({ size: books.length, books });
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

const getDetailsBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await BooksModel.findById(id).populate('authorId');
    res.status(statusCodes.OK).json({ book });
    return book;
  } catch (error) {
    res.status(statusCodes.NOT_FOUND).json({ error });
  }
};

const updateBooks = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await BooksModel.findById(id);
    await book?.updateOne({ $set: req.body });
    res.status(statusCodes.OK).json({ message: 'Update book successsfully!!' });
    return book;
  } catch (error) {
    res.status(statusCodes.SERVER).json(error);
  }
};

const deleteBooks = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await AuthorsModel.updateMany({ booksId: id }, { $pull: { booksId: id } });
    await BooksModel.findByIdAndDelete(id);
    res.status(statusCodes.OK).json({ message: 'Delete book successsfully!!' });
  } catch (error) {
    res.status(statusCodes.SERVER).json(error);
  }
};

const bookController = { getAllBooks, createBook, getDetailsBook, updateBooks, deleteBooks };
export default bookController;
