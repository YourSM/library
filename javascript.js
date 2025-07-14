const myLibrary = [];

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
}