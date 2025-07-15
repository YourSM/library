const myLibrary = [];

const libraryContainer = document.querySelector("#libraryContainer")

function Book(uuid, author, title, pages, hasRead) {
  this.uuid = uuid;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.hasRead = hasRead;
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
}

function addBookToLibrary(author, title, pages, hasRead) {
  myLibrary.push(new Book(crypto.randomUUID(), author, title, pages, hasRead))
  addBookInfo(author, title, pages, hasRead)
}

function displayBooks(bookInfo) {
    const book = document.createElement("div")
    book.classList.add("book")
    libraryContainer.appendChild(book)
    book.appendChild(bookInfo)
}

  function addBookInfo(author, title, pages, hasRead) {

    const bookInfo = document.createElement("div")
    bookInfo.classList.add("bookInfo")
    
    authorContainer = document.createElement("p")
    authorContainer.textContent = `Author: ${author}`;
    bookInfo.appendChild(authorContainer);

    titleContainer = document.createElement("p")
    titleContainer.textContent = `Title: ${title}`;
    bookInfo.appendChild(titleContainer);

    pagesContainer = document.createElement("p")
    pagesContainer.textContent = `Pages: ${pages}`;
    bookInfo.appendChild(pagesContainer);

    hasReadContainer = document.createElement("p")
    hasReadContainer.textContent = `Read: ${hasRead}`;
    bookInfo.appendChild(hasReadContainer);
    
    displayBooks(bookInfo)
  }