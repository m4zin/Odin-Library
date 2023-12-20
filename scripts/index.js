function book(bookName, author, numOfPages, isRead) {
  this.bookName = bookName;
  this.author = author;
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

// Declaring isRead boolean for checkbox in form.
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

	// If any of the fields are empty.
	if(authorName.value == '')
	{
		authorName.value = 'Empty'
	} 
	if(bookName.value == '') {
		bookName.value = 'Empty'
	}
	if(numOfPages.value == '') {
		numOfPages.value = 0
	}

	// Checking whether checkbox true/false.
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

	listOfBooks = []

	listOfBooks.push(newBook)

	for(let i = 0; i < listOfBooks.length; i++)
	{
		if(i == (listOfBooks.length - 1))
		{
			let bookChild = document.createElement('div')
			bookChild.className = 'book'

			// Appending bookchild to parent element.
			centerBooks.append(bookChild)

			let bookNameInDom = document.createElement('h2')
			let authNameInDom = document.createElement('h3')
			let numOfPagesInDom = document.createElement('h4')

			let bookReadCheckboxInDom = document.createElement('div')
			bookReadCheckboxInDom.className = 'book-read-checkbox'
			let inputCheckboxInDom = document.createElement('input')
			inputCheckboxInDom.setAttribute("type", "checkbox")
			let labelInDom = document.createElement('label')
			labelInDom.innerHTML = 'Read'

			bookReadCheckboxInDom.append(inputCheckboxInDom)
			bookReadCheckboxInDom.append(labelInDom)

			let delBtnInDom = document.createElement('button')
			delBtnInDom.className = 'book-del-btn'
			delBtnInDom.innerHTML = 'Delete'

			bookChild.append(bookNameInDom)
			bookChild.append(authNameInDom)
			bookChild.append(numOfPagesInDom)
			bookChild.append(bookReadCheckboxInDom)
			bookChild.append(delBtnInDom)

			// When delete button pressed, it's parent div or the book is removed from dom.
			delBtnInDom.addEventListener('click', (e) => {
				const parentElem = e.target.parentElement
				parentElem.remove();
			})

			listOfBooks.forEach(reading => {
				bookNameInDom.innerHTML = `Book: ${reading.bookName}`
				authNameInDom.innerHTML = `Author: ${reading.author}`
				numOfPagesInDom.innerHTML = `Page Count: ${reading.numOfPages}`

				if(reading.isRead == true)
				{
					inputCheckboxInDom.checked = true;
				}
				else {
					inputCheckboxInDom.checked = false;
				}
			})
		}
	}

	// Clearing object after addition of new book in dom.
	newBook = null;
});
