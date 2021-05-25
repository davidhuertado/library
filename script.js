//Array for storing book
let myLibrary = [];
const libraryContainer = document.querySelector('.library-container');

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

const libraryFunctions = {
  addBookToLibrary: function (...book) {
    myLibrary.push(...book);
  },

  displayLibrary: function () {
    myLibrary.forEach((book) => {
      //Create Elements in the DOM
      let bookDiv = document.createElement('div');
      let titleElement = document.createElement('h2');
      let authorElement = document.createElement('h3');
      let pagesElement = document.createElement('h4');
      let readItElement = document.createElement('h4');

      //Append elements
      libraryContainer.appendChild(bookDiv);
      bookDiv.appendChild(titleElement);
      bookDiv.appendChild(authorElement);
      bookDiv.appendChild(pagesElement);
      bookDiv.appendChild(readItElement);

      //Text of the elements
      titleElement.textContent = `"${book.title}"`;
      authorElement.textContent = book.author;
      pagesElement.textContent = book.pages;
      book.read
        ? (readItElement.textContent = 'Read')
        : (readItElement.textContent = 'Not read yet');

      bookDiv.classList.add('book-container');
      titleElement.classList.add('book-lines');
      authorElement.classList.add('book-lines');
      pagesElement.classList.add('book-lines');
      readItElement.classList.add('book-lines');
    });
  },
};

const biblia = new Book('Biblia', 'Jesus', 1000, false);
const hobbit = new Book('Hobbit', 'Tolkien', 1500, true);
libraryFunctions.addBookToLibrary(biblia, hobbit);
console.log(myLibrary);
libraryFunctions.displayLibrary();
