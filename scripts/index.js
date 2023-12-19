function book(author, bookName, numOfPages, isRead) {
  this.author = author;
  this.bookName = bookName;
  this.numOfPages = numOfPages;
  this.isRead = isRead;
}

let addReadingBtn = document.querySelector(".add-reading");
let form = document.querySelector(".form-popup");
let formButton = document.querySelector(".reading-submit");
let wholePage = document.querySelector(".header-main");

// Form field values.
let authorName = document.getElementById("author");
let bookName = document.getElementById("reading");
let numOfPages = document.getElementById("numOfPages");
let checkbox = document.getElementById("checkbox")

let isRead = false

// Where we will be appending our new books
let centerBooks = document.querySelector('.center-books')

// When add a book button is pressed.
addReadingBtn.addEventListener("click", function () {
  // First make the form pop up and clear the rest of the page.
  form.style.display = "flex";
  wholePage.style.display = "none";
  wholePage.style.opacity = 0.5;
});

// When form button is pressed.
formButton.addEventListener("click", () => {

	if(checkbox.checked) {
		isRead = true
	} else {
		isRead = false;
	}

  // Getting rid of form after submission and displaying previous page again.
  wholePage.style.display = "grid";
  wholePage.style.opacity = null;
  form.style.display = "none";

  // Creating new object with form values.
  let newBook = new book(
		bookName.value, 
		authorName.value,
		numOfPages.value,
		isRead
	);

	// Creating each book div
	let createBook = document.createElement('div')
	createBook.className = 'book'

	// Appending the book div to center-books
	centerBooks.appendChild(createBook)

	let readingName = document.createElement('h2')
	readingName.innerHTML = newBook.bookName

	let authName = document.createElement('p')
	authName.innerHTML = newBook.author

	let numberOfPages = document.createElement('p')
	numberOfPages.innerHTML = newBook.numOfPages

	createBook.appendChild(readingName)
	createBook.appendChild(authName)
	createBook.appendChild(numberOfPages)

	// Clearing object once pushed into array.
	newBook = null;

});
