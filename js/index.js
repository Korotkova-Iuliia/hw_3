//

// ✅ Логически и синтаксически сгруппированные сущности
const bookShelf = {
  books: ['The Last Kingdom', 'The Last Kingdom', 'Dream Guardian'],
  getBooks() {
    // console.log('Этот метод будет возвращать все книги - свойство books');
    console.log(this);
  },
  papers: ['The Last Kingdom', 'Dream Guardian'],
  getBooks() {
    // console.log('Этот метод будет возвращать все книги - свойство books');
    console.log(this);
  },
  addBook(bookName) {
    bookShelf.books.push('драма');
    console.log(this);
    // console.log(bookName);
  },
  addBookNew(bookName) {
    // bookShelf.books.push('yes');
    console.log(this);
    // console.log(bookName);
  },
};

// console.log(bookShelf.books);

// Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook();
bookShelf.getBooks();
bookShelf.addBook();
bookShelf.addBookNew();

// bookShelf.getBooks();
