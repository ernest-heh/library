let myLibrary = [];

function Book(title, author, isbn, isRead = false) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.isRead = isRead;
  this.coverImg = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  renderBooks();
}

function addBook() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;
  let isRead = document.querySelector("#is-read").checked;
  let newBook = new Book(title, author, isbn, isRead);
  myLibrary.push(newBook);
  renderBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderBooks();
}

function renderBooks() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.classList.add("card");
    bookEl.innerHTML = `
    <div class="book-info">
      <img class="book-cover" src="${book.coverImg}">
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">by ${book.author}</p>
    </div>
    <div class="book-btns">
      <button class="book-btn" onclick="toggleRead(${i})">${
      book.isRead
        ? "<span class='material-symbols-outlined'>check_box</span> Read"
        : "<span class='material-symbols-outlined'>check_box_outline_blank</span> Unread"
    }</button>
      <button class="book-btn" onclick="removeBook(${i})"><span class="material-symbols-outlined">
      delete
      </span></button>
    </div>
    `;
    console.log(bookEl);
    libraryEl.appendChild(bookEl);
  }
}

const book1 = new Book("Atomic Habits", "James Clear", "1847941834", true);
const book2 = new Book(
  "Dieter Rams, The Complete Works",
  "Klaus Klemp",
  "1838661530"
);
const book3 = new Book(
  "The Psychology of Money",
  "Morgan Housel",
  "0857197681"
);
const book4 = new Book(
  "The Creative Act: A Way of Being",
  "Rick Rubin",
  "0593652886",
  true
);
const book5 = new Book(
  "Dieter Rams: Ten Principles for Good Design",
  "Cees W. De Jong",
  "3791387324"
);
const book6 = new Book(
  "Super Normal: Sensations of the Ordinary",
  "Naoto Fukasawa",
  "3037781068"
);
const book7 = new Book("Inward", "Yung Pueblo", "1449495753");
const book8 = new Book(
  "The Design Of Everyday Things",
  "Don Norman",
  "9780465050659"
);

myLibrary.push(book1, book2, book3, book4, book5, book6, book7, book8);
renderBooks();

const closeFormBtn = document.querySelector("#form-close");
closeFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  newBookDialog.style.display = "none";
});

const newBookForm = document.querySelector("#add-book-form");
newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  modal.close();
});

const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});
