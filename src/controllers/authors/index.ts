import { statusCodes } from '@/utils/contants';
import { Request, Response } from 'express';

const getAllAuthor = async (req: Request, res: Response) => {
  res.status(statusCodes.OK).json({ message: 'Get all author' });
};

const createAuthor = async (req: Request, res: Response) => {
  res.status(statusCodes.CREATED).json({ author: req.body });
};

const authorControllers = {
  getAllAuthor,
  createAuthor
};
export default authorControllers;
