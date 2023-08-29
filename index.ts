interface IBook {
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
}

abstract class BooksRepository {
  book: IBook;
  createBook(book: IBook) {
    console.log("Not Implemented");
  }
  getBook(id: number) {
    console.log("Not Implemented");
  }
  getBooks() {
    console.log("Not Implemented");
  }
  updateBook(id: number) {
    console.log("Not Implemented");
  }
  deleteBook(id: number) {
    console.log("Not Implemented");
  }
}
