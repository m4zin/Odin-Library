const addReadingBtn = document.querySelector(".add-reading");
const form = document.querySelector('.form-popup')
const wholePage = document.querySelector('.header-main')
const body = document.querySelector('body')

addReadingBtn.addEventListener("click", function () {
    // First make the form pop up.
    form.style.display = "flex"
    wholePage.style.display = "none"
    wholePage.style.opacity = 0.5
});
