const axios = require('axios');

// Task 10: Get all books (async/await)
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:3000/api/books');
    console.log('All books:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

// Task 11: Search by ISBN (Promises)
function searchByISBN(isbn) {
  axios.get(`http://localhost:3000/api/books/isbn/${isbn}`)
    .then(response => console.log('Book details:', response.data))
    .catch(error => console.error('Error:', error.response.data));
}