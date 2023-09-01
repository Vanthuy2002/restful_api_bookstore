interface BooksType {
  title: string;
  price: number;
  publish: string;
  genres: string[];
  author: AuthorTypes;
}

interface AuthorTypes {
  name: string;
  age: number;
  birth: number;
  booksCount: number;
  books: Omit<BooksType, 'author'>[];
}
