const body = document.querySelector("body")

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("newBookButton");
const cancelButton = document.getElementById("cancelButton")

const form = document.querySelector("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const myLibrary = [];

function Book(uuid, author, title, pages, hasRead) {
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
  const book = new Book(crypto.randomUUID(), author, title, pages, hasRead)
  myLibrary.push(book)
  addBookInfo(book)
}

  function addBookInfo() {

    libraryContainer.remove()
    libraryContainer = document.createElement("div")
    libraryContainer.setAttribute("id", "libraryContainer")
    body.appendChild(libraryContainer)
    
  
    myLibrary.forEach(book => {
      const bookInfo = document.createElement("div")
      bookInfo.classList.add("bookInfo")

      const newBook = document.createElement("div")
      newBook.setAttribute("data-uuid", book.uuid)
      newBook.classList.add("book")
      newBook.appendChild(bookInfo)
      libraryContainer.appendChild(newBook)
      
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
  
      deleteBook = document.createElement("button")
      deleteBook.textContent = "Delete Book"
      bookInfo.appendChild(deleteBook)
      deleteBook.addEventListener("click", () => {
        removeBook()
  })

  function removeBook() {
    myLibrary.splice(myLibrary.findIndex(book => book.uuid === newBook.dataset.uuid), 1)
    console.log(newBook.dataset.uuid)
    targetedBook = document.querySelector(`[data-uuid="${newBook.dataset.uuid}"]`)
    targetedBook.remove()
  }
   })
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

  addBookToLibrary("g", "h", "3", "yes");
  addBookToLibrary("t", "h", "3", "yes");
  addBookToLibrary("t", "h", "3", "yes");
  addBookToLibrary("t", "h", "3", "yes");