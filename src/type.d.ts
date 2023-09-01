interface BooksType {
  title: string;
  price: number;
  publish: string;
  genres: string[];
  authorId: {
    _id: string;
  };
}

interface AuthorTypes {
  name: string;
  age: number;
  birth: number;
  booksCount: number;
  booksId: [];
}
