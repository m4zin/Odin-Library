class book {
  constructor(bookName, author, numOfPages, isRead) {
    this.bookName = bookName
    this.author = author
    this.numOfPages = numOfPages
    this.isRead = isRead
  }

  getBookName() {
    console.log(`this is the book name, ${this.bookName}`)
  }

}

let addReadingBtn = document.querySelector(".add-reading");
let form = document.querySelector(".form-popup");
let formButton = document.querySelector(".reading-submit");
let wholePage = document.querySelector(".header-main");

// Where we will be appending our new books
let centerBooks = document.querySelector(".center-books");

function showFormOnly() {
  // First make the form pop up and clear the rest of the page.
  form.style.display = "flex";
  wholePage.style.display = "none";
  wholePage.style.opacity = 0.5;
}

function handleForm(e) {
  // Form field values.
  let bookName = document.getElementById("reading").value;
  let authorName = document.getElementById("author").value;
  let numOfPages = document.getElementById("numOfPages").value;
  let checkbox = document.getElementById("checkbox").checked;

  if(form.checkValidity()) {
    addBook(checkbox, authorName, bookName, numOfPages)
    e.preventDefault()
  }

}

function addBook(isRead, authorName, bookName, numOfPages) {
  // Declaring isRead boolean for checkbox in form.
  // let isRead = false;

  // If any of the fields are empty.
  // if (authorName.value == "") {
  //   authorName.value = "Empty";
  // }
  // if (bookName.value == "") {
  //   bookName.value = "Empty";
  // }
  // if (numOfPages.value == "") {
  //   numOfPages.value = 0;
  // }

  // if(checkbox.checked == true ? isRead = true : false);

  // Getting rid of form after submission and displaying previous page again.
  wholePage.style.display = "grid";
  wholePage.style.opacity = null;
  form.style.display = "none";

  let newBook = new book(bookName, authorName, numOfPages, isRead)

	// List to store our books.
  listOfBooks = [];

	// Pushing a new book into the list.
  listOfBooks.push(newBook);

  for (let i = 0; i < listOfBooks.length; i++) {
    if (i == listOfBooks.length - 1) {
      let bookChild = document.createElement("div");
      bookChild.className = "book";

      // Appending bookchild to parent element.
      centerBooks.append(bookChild);

      let bookNameInDom = document.createElement("h2");
      let authNameInDom = document.createElement("h3");
      let numOfPagesInDom = document.createElement("h4");

      // Div that contains our label and checkbox for read/notRead.
      let bookReadCheckboxInDom = document.createElement("div");
      bookReadCheckboxInDom.className = "book-read-checkbox";

      let inputCheckboxInDom = document.createElement("input");
      inputCheckboxInDom.setAttribute("type", "checkbox");

      let labelInDom = document.createElement("label");
      labelInDom.innerHTML = "Read";

      bookReadCheckboxInDom.append(inputCheckboxInDom, labelInDom);

      // Delete button on the book.
      let delBtnInDom = document.createElement("button");
      delBtnInDom.className = "book-del-btn";
      delBtnInDom.innerHTML = "Delete";

      bookChild.append(
        bookNameInDom,
        authNameInDom,
        numOfPagesInDom,
        bookReadCheckboxInDom,
        delBtnInDom
      );

      // When delete button pressed, it's parent div or the book is removed from dom.
      delBtnInDom.addEventListener("click", (e) => {
        const parentElem = e.target.parentElement;
        parentElem.remove();
      });

      listOfBooks.forEach((reading) => {
        bookNameInDom.innerHTML = `Book: ${reading.bookName}`;
        authNameInDom.innerHTML = `Author: ${reading.author}`;
        numOfPagesInDom.innerHTML = `Page Count: ${reading.numOfPages}`;

        if (
          reading.isRead == true ? (inputCheckboxInDom.checked = true) : false
        );
      });
    }
  }
  // Clearing object after addition of new book in dom.
  newBook = null;
}

// When add a book button is pressed.
addReadingBtn.addEventListener("click", showFormOnly);

// When form button is pressed.
formButton.addEventListener("click", handleForm);
