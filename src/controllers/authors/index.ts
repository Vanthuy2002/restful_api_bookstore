import { statusCodes } from '@/utils/contants';
import { Request, Response } from 'express';
import { AuthorsModel } from '@/Model';

const getAllAuthor = async (req: Request, res: Response) => {
  try {
    const allAuthor = await AuthorsModel.find().exec();
    res.status(statusCodes.OK).json({ authors: allAuthor });
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
    res.status(statusCodes.SERVER).json({ error });
  }
};

const authorControllers = {
  getAllAuthor,
  createAuthor
};
export default authorControllers;
