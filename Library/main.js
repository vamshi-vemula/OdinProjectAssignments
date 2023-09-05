const addBookBtn = document.querySelector(".addBookBtn");
const addBookDialog = document.querySelector("#add-book-dialog");
const submitBtn = document.querySelector("#add-book-dialog button");
const titleValue = document.querySelector("#add-book-dialog input[name='title']");
const authorValue = document.querySelector("#add-book-dialog input[name='author']");
const pagesValue = document.querySelector("#add-book-dialog input[name='pages']");
const readValue = document.querySelector("#add-book-dialog input[name='read']");
const booksGrid = document.querySelector(".books-grid");
const clearAllBtn = document.querySelector(".clearAllBtn");
const closedialogBtn = document.querySelector(".close-dialog p");

addBookBtn.addEventListener("click", () => {
    addBookDialog.showModal();
});

clearAllBtn.addEventListener("click", () => {
    myLibrary=[];
    localStorage.removeItem("data");
    while (booksGrid.firstChild) {
        booksGrid.removeChild(booksGrid.firstChild);
    }
});

closedialogBtn.addEventListener("click", () => {
    addBookDialog.close();
});

let myLibrary = [];

if(localStorage['data']) {
    const localData = localStorage.getItem("data");
    myLibrary = JSON.parse(localData);
}

function Book(title,author,pages,read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

function addBookToLibrary() {
  const newbook = new Book(titleValue.value,authorValue.value,pagesValue.value,readValue.checked);
  myLibrary.push(JSON.stringify(newbook));
  localStorage.setItem("data",JSON.stringify(myLibrary))
  displayCard(JSON.stringify(newbook));
  addBookDialog.close();
}

function displayCard(element) {
    element = JSON.parse(element)
    const card = document.createElement("div");
    card.classList.add("card-item");
    const title = document.createElement("p");
    title.textContent = `${element["title"]}`;
    const author = document.createElement("p");
    author.textContent = `By ${element["author"]}`;
    const pages = document.createElement("p");
    pages.textContent = `${element["pages"]} Pages` ;
    const read = document.createElement("div");
    if(element.read) {
        read.classList.add("has-read");
        read.textContent = "Read";
    }
    else {
        read.classList.add("not-read");
        read.textContent = "Not Read";
    }
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    booksGrid.appendChild(card);
}

submitBtn.addEventListener("click", addBookToLibrary);

function displayAllCards() {
    myLibrary.forEach(element => {
        displayCard(element);
    });
}

displayAllCards();