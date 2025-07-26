const libraryContainer = document.querySelector("#libraryContainer");

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("newBook");
const cancelButton = document.getElementById("cancelButton")

const form = document.querySelector("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const myLibrary = [];

function Book(uuid, title, author, pages, hasRead) {
  this.uuid = uuid;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
}

function addBookToLibrary(author, title, pages, hasRead) {
  book = new Book(crypto.randomUUID(), author, title, pages, hasRead)
  myLibrary.push(book)
  addBookInfo(book)
}

function displayBooks(bookInfo) {
    const book = document.createElement("div")
    book.classList.add("book")
    libraryContainer.appendChild(book)
    book.appendChild(bookInfo)
}

  function addBookInfo(book) {
    const bookInfo = document.createElement("div")
    bookInfo.classList.add("bookInfo")

    titleContainer = document.createElement("h2")
    titleContainer.textContent = book.title;
    bookInfo.appendChild(titleContainer);
    
    authorContainer = document.createElement("p")
    authorContainer.textContent = `Author: ${book.author}`;
    bookInfo.appendChild(authorContainer);

    pagesContainer = document.createElement("p")
    pagesContainer.textContent = `Pages: ${book.pages}`;
    bookInfo.appendChild(pagesContainer);

    hasReadContainer = document.createElement("p")
    hasReadContainer.textContent = `Read: ${book.hasRead}`;
    bookInfo.appendChild(hasReadContainer);
    
    displayBooks(bookInfo)
  }

showButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  form.reset();
  dialog.close();
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  titleValue = title.value;
  authorValue = author.value;
  pagesValue = pages.value;
  readValue = read.checked === true
    ? "yes"
    : "no";
  form.reset();
  dialog.close();
  addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
});

  addBookToLibrary("t", "h", "3", "yes");
  addBookToLibrary("t", "h", "3", "yes");
  addBookToLibrary("t", "h", "3", "yes");
  addBookToLibrary("t", "h", "3", "yes");