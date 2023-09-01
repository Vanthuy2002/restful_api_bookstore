import mongoose from 'mongoose';

const schema = new mongoose.Schema<AuthorTypes>(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    birth: {
      type: Number,
      required: true
    },
    booksCount: {
      type: Number
    },
    booksId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
      }
    ]
  },
  { timestamps: true }
);

const AuthorsModel = mongoose.model('Author', schema);
export default AuthorsModel;
