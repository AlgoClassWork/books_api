const API_URL = 'http://127.0.0.1:8000/api/v1/books/'
const bookListElement = document.getElementById('bookList')
const fetchButton = document.getElementById('fetchButton')

function renderBooks(books) {
    bookListElement.innerHTML = ''
    books.forEach(book => {
        const li = document.createElement('li')
        li.innerHTML = `Книга: ${book.title}`
        bookListElement.appendChild(li)
    })
}

async function fetchBooks() {
    const response = await fetch(API_URL)
    const data = await response.json()
    renderBooks(data)
}

fetchButton.addEventListener('click', fetchBooks)
