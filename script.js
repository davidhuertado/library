//Array for storing books
let myLibrary = [];
let deleteBtns = [];
const newBookBtn = document.querySelector('.new-book');
const submitBtn = document.querySelector('.submit-btn');
const hideCard = document.querySelector('.hide-card');
const closeBtn = document.querySelector('.close-btn');

const Book = class {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.display = false;
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
  libraryContainer: document.querySelector('.library-container'),

  //FUNCTIONS
  addBookToLibrary: function (...book) {
    myLibrary.push(...book);
  },

  displayLibrary: function () {
    myLibrary.forEach((book) => {
      //Check if the book is already in the display
      if (book.display) return;
      book.display = true;
      book.position = myLibrary.length - 1;
      //Create Elements in the DOM
      let bookDiv = document.createElement('div');
      let titleElement = document.createElement('h2');
      let authorElement = document.createElement('h3');
      let pagesElement = document.createElement('h4');
      let readItElement = document.createElement('h4');
      let deleteElement = document.createElement('button');

      //Append elements
      libraryFunctions.libraryContainer.appendChild(bookDiv);
      bookDiv.appendChild(titleElement);
      bookDiv.appendChild(authorElement);
      bookDiv.appendChild(pagesElement);
      bookDiv.appendChild(readItElement);
      bookDiv.appendChild(deleteElement);
      //Text of the elements
      titleElement.textContent = `"${book.title}"`;
      authorElement.textContent = book.author;
      pagesElement.textContent = book.pages;
      book.read
        ? (readItElement.textContent = 'Read')
        : (readItElement.textContent = 'Not read yet');
      deleteElement.textContent = 'Delete book';

      //Atributtes of the elements
      bookDiv.classList.add('book-container');
      titleElement.classList.add('book-lines');
      authorElement.classList.add('book-lines');
      pagesElement.classList.add('book-lines');
      readItElement.classList.add('book-lines');
      deleteElement.classList.add('delete-btn');
      deleteElement.setAttribute('id', `position-${book.position}`);
    });
  },
  clearCard: function () {
    hideCard.classList.toggle('hide');
    (formObject.formTitle.value = ''),
      (formObject.formAuthor.value = ''),
      (formObject.formPages.value = ''),
      (formObject.formRead.checked = false);
  },
};

const formObject = {
  formTitle: document.getElementById('name'),
  formAuthor: document.getElementById('author'),
  formPages: document.getElementById('pages'),
  formRead: document.getElementById('read'),
};

//BTN functionality
document
  .querySelector('.library-container')
  .addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    }
  });
newBookBtn.addEventListener('click', function () {
  hideCard.classList.toggle('hide');
});

closeBtn.addEventListener('click', libraryFunctions.clearCard);

submitBtn.addEventListener('click', function () {
  const bookToAdd = new Book(
    formObject.formTitle.value,
    formObject.formAuthor.value,
    formObject.formPages.value,
    formObject.formRead.checked
  );
  libraryFunctions.addBookToLibrary(bookToAdd);

  libraryFunctions.displayLibrary();
  libraryFunctions.clearCard();
});
// const biblia = new Book('Biblia', 'Jesus', 1000, false);
// const hobbit = new Book('Hobbit', 'Tolkien', 1500, true);
// libraryFunctions.addBookToLibrary(biblia, hobbit);

// libraryFunctions.displayLibrary();
