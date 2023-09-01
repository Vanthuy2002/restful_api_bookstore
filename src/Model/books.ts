import mongoose from 'mongoose';

const schema = new mongoose.Schema<BooksType>(
  {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    publish: {
      type: String
    },
    genres: {
      type: [String],
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author'
    }
  },
  { timestamps: true }
);

const BooksModel = mongoose.model('Book', schema);
export default BooksModel;
