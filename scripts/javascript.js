const bookModal = document.querySelector('#bookModal');
const addButton = document.querySelector('.addButton');
const closeButton = document.querySelector('.closebutton');
const bookForm = document.querySelector('#bookForm');

addButton.addEventListener('click', () => {
    bookModal.showModal();
})

closeButton.addEventListener('click', ()=> {
    bookModal.close();
    bookForm.reset();
})

const myLibrary = [

];

function Book(title, author, genre, pages, read, bookId) {
    this.title = title;
    this.authoer = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.bookId = bookId;
}

function addBookToLibrary(title, author, genre, pages, read, bookId) {
    let newBook = new Book(title, author, genre, pages, read, bookId);
    myLibrary.push(newBook);
}

function buildBookDisplay(title, author, genre, pages, read, bookId) {

}
//display function - this needs to be a for loop that pulls the hard coded, and the added and displays them in the correct spot

//buttons for opening modal dialog window

//