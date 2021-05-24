//Array for storing book
let myLibrary = [];

const Book = class {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    let infoString = `${this.title} by ${this.author}, ${this.pages} pages, `;
    if (this.read === true) {
      infoString += 'read.';
    } else {
      infoString += 'not read yet.';
    }
    return infoString;
  }
};

const addBookToLibrary = function (book) {
  myLibrary.push(book);
};

const displayLibrary = function () {
  myLibrary.forEach((book) => {});
};

// const biblia = new Book('Biliba', 'Jesus', 1000, true);
// addBookToLibrary(biblia);
// console.log(myLibrary);
