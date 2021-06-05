//TODO Terminar funcion de boton borrar
//Array for storing books

let myLibrary = [];
let deleteBtns = [];
let bookIndex = 0;
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
      book.position = bookIndex;
      bookIndex++;
      //Create Elements in the DOM
      let bookDiv = document.createElement('div');
      let titleElement = document.createElement('h2');
      let authorElement = document.createElement('h3');
      let pagesElement = document.createElement('h4');
      let readItElement = document.createElement('h4');
      let deleteElement = document.createElement('button');
      let readBtnElement = undefined;
      if (book.read === false) {
        readBtnElement = document.createElement('button');
      }

      //Append elements

      bookDiv.appendChild(titleElement);
      bookDiv.appendChild(authorElement);
      bookDiv.appendChild(pagesElement);
      bookDiv.appendChild(readItElement);
      if (readBtnElement !== undefined) {
        bookDiv.appendChild(readBtnElement);
      }

      bookDiv.appendChild(deleteElement);
      this.libraryContainer.appendChild(bookDiv);
      //Text of the elements
      titleElement.textContent = `"${book.title}"`;
      authorElement.textContent = book.author;
      pagesElement.textContent = book.pages;
      book.read
        ? (readItElement.textContent = 'Read')
        : (readItElement.textContent = 'Not read yet');
      if (readBtnElement !== undefined)
        readBtnElement.textContent = 'Already read?';

      deleteElement.textContent = 'Delete book';

      //Atributtes of the elements
      bookDiv.classList.add('book-container');
      titleElement.classList.add('book-lines');
      authorElement.classList.add('book-lines');
      pagesElement.classList.add('book-lines');
      readItElement.classList.add('book-lines');
      if (readBtnElement !== undefined) {
        readBtnElement.classList.add('card-btn', 'read-btn');
      }

      deleteElement.classList.add('card-btn', 'delete-btn');
      deleteElement.parentElement.setAttribute(
        'id',
        `position-${book.position}`
      );
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

//Delete BTN
document
  .querySelector('.library-container')
  .addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
      const deleteIndex = e.target.parentElement.id.slice(9);
      for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].position == deleteIndex) {
          myLibrary.splice(i, 1);
          e.target.parentElement.remove();
        }
      }
    }
  });

document
  .querySelector('.library-container')
  .addEventListener('click', function (e) {
    if (e.target.classList.contains('read-btn')) {
      const index = e.target.parentElement.id.slice(9);
      for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].position == index) {
          e.target.parentElement.remove();
          myLibrary[i].read = true;
          myLibrary[i].display = false;
          libraryFunctions.displayLibrary();
        }
      }
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
