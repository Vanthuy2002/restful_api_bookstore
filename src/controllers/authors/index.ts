import { statusCodes } from '@/utils/contants';
import { Request, Response } from 'express';
import { AuthorsModel, BooksModel } from '@/Model';

const getAllAuthor = async (req: Request, res: Response) => {
  try {
    const allAuthor = await AuthorsModel.find().exec();
    res.status(statusCodes.OK).json({ size: allAuthor.length, authors: allAuthor });
    return allAuthor;
  } catch (error) {
    res.status(statusCodes.BAD_REQUEST).json({ error });
  }
};

const createAuthor = async (req: Request, res: Response) => {
  try {
    const newAuthor = await AuthorsModel.create({ ...req.body });
    await newAuthor.save();
    res.status(statusCodes.CREATED).json({ author: newAuthor });
    return newAuthor;
  } catch (error) {
    res.status(statusCodes.SERVER).json(error);
  }
};

// GET AN AUTHOR
const getDetailsAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const author = await AuthorsModel.findById(id).populate('booksId');
    res.status(statusCodes.OK).json({ author });
    return author;
  } catch (error) {
    res.status(statusCodes.NOT_FOUND).json(error);
  }
};

// update an author
const updateAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const author = await AuthorsModel.findByIdAndUpdate(id, { $set: req.body });
    res.status(statusCodes.OK).json({ message: 'Update author successfully!!' });
    return author;
  } catch (error) {
    res.status(statusCodes.SERVER).json(error);
  }
};

const deleteAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await BooksModel.updateMany({ authorId: id }, { $pull: { authorId: id } });
    await AuthorsModel.findByIdAndDelete(id);
    res.status(statusCodes.OK).json({ message: 'Delete author successfully' });
  } catch (error) {
    res.status(statusCodes.SERVER).json(error);
  }
};

const authorControllers = {
  getAllAuthor,
  createAuthor,
  getDetailsAuthor,
  updateAuthor,
  deleteAuthor
};
export default authorControllers;
