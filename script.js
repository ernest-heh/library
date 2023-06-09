let myLibrary = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "1847941834",
    isRead: false,
    coverImg: `https://covers.openlibrary.org/b/isbn/1847941834-M.jpg`,
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    isbn: "0857197681",
    isRead: false,
    coverImg: `https://covers.openlibrary.org/b/isbn/0857197681-M.jpg`,
  },
  {
    title: "Ikigai: Simple Secrets to a Long and Happy Life",
    author: "Héctor García",
    isbn: "1529902401",
    isRead: false,
    coverImg: `https://covers.openlibrary.org/b/isbn/1529902401-M.jpg`,
  },
];

function Book(title, author, isbn, isRead = false) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.isRead = isRead;
  this.coverImg = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}

function addBook() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;
  let isRead = document.querySelector("#is-read").checked;
  let newBook = new Book(title, author, isbn, isRead);
  myLibrary.push(newBook);
  // console.log(myLibrary);
  renderBooks();
}

function renderBooks() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
    <div class="card">
      <img class="book-cover" src="${book.coverImg}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p class="book-status">${book.isRead ? "Read" : "Not Read Yet"}</p>
    </div>
    `;
    console.log(bookEl);
    libraryEl.appendChild(bookEl);
  }
}
renderBooks();

// const book1 = new Book("Atomic Habits", "James Clear", "1847941834");
// const book2 = new Book(
//   "The Psychology of Money",
//   "Morgan Housel",
//   "0857197681"
// );
// const book3 = new Book("Chip War", "Chris Miller", "1398504106");

// myLibrary.forEach((book) => {
//   const node = document.createElement("div");
// });

const newBookBtn = document.querySelector("#add-book");
const newBookDialog = document.querySelector("#add-book-dialog");
const newBookForm = document.querySelector("#add-book-form");

newBookBtn.addEventListener("click", () => {
  newBookDialog.style.display = "block";
});

const closeFormBtn = document.querySelector("#form-close");
closeFormBtn.addEventListener("click", () => {
  newBookDialog.style.display = "none";
});

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
});
