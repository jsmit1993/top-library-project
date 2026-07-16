const bookModal = document.querySelector('#bookModal');
const addButton = document.querySelector('.addButton');
const closeButton = document.querySelector('.closebutton');
const bookForm = document.querySelector('#bookForm');
const bookDisplay = document.querySelector('.bookDisplay');

addButton.addEventListener('click', () => {
    bookModal.showModal();
})

closeButton.addEventListener('click', ()=> {
    bookModal.close();
    bookForm.reset();
})

const myLibrary = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        pages: "320",
        read: "yes",
        bookId: "001"
    },
    {
        title: "Red Rising",
        author: "Pierce Brown",
        genre: "Science Fiction",
        pages: "382",
        read: "yes",
        bookId: "002"
    },
    {
        title: "The Lion, The Witch, and The Wardrobe",
        author: "C. S. Lewis",
        genre: "Fantasy",
        pages: "208",
        read: "yes",
        bookId: "003"
    },
    {
        title: "Harry Potter and the Prisoner of Azakaban",
        author: "J.K. Rowling",
        genre: "Fantasy",
        pages: "438",
        read: "no",
        bookId: "004"
    }

];

function Book(title, author, genre, pages, read, bookId) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.bookId = bookId;
}

function addBookToLibrary(title, author, genre, pages, read, bookId) {
    let newBook = new Book(title, author, genre, pages, read, bookId);
    myLibrary.push(newBook);
}

function buildBookDisplay(bookLibrary) {
    bookLibrary.forEach(book => {
        let bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');

        let bookTitle = document.createElement('p');
        bookTitle.classList.add('bookTitle');
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);

        let bookAuthor = document.createElement('p');
        bookAuthor.classList.add('bookAuthor');
        bookAuthor.textContent = book.author;
        bookCard.appendChild(bookAuthor);

        let bookGenre = document.createElement('p');
        bookGenre.classList.add('bookGenre');
        bookGenre.textContent = book.genre;
        bookCard.appendChild(bookGenre);

        let bookPages = document.createElement('p');
        bookPages.classList.add('bookPages');
        bookPages.textContent = book.pages;
        bookCard.appendChild(bookPages);

        let bookRead = document.createElement('p');
        bookRead.classList.add('bookRead');
        bookRead.textContent = book.read;
        bookCard.appendChild(bookRead);

        let bookIds = document.createElement('p');
        bookIds.classList.add('BookId');
        bookIds.textContent = book.bookId;
        bookIds.style.display = 'none';
        bookCard.appendChild(bookIds);

        let deletebutton = document.createElement('button');
        deletebutton.classList.add('deleteButton');
        deletebutton.textContent = 'Delete Book'
        bookCard.appendChild(deletebutton);
        
        bookDisplay.appendChild(bookCard);
    });
}

buildBookDisplay(myLibrary);
//display function - this needs to be a for loop that pulls the hard coded, and the added and displays them in the correct spot

//buttons for opening modal dialog window

//