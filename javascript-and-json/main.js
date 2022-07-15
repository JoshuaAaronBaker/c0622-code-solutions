var books = [
  {
    isbn: '978-0441172719',
    title: 'Dune',
    author: 'Frank Herbert'

  },
  {
    isbn: '978-0439785969',
    title: 'Harry Potter and the Hald Blood Prince',
    author: 'J.K. Rowling'
  },
  {
    isbn: '978-0064471046',
    title: 'The Lion, The Witch, and The Wardrobe',
    author: 'C.S. Lewis'
  }
];

console.log('books: ', books, 'typeof books: ', typeof books);
var booksJson = JSON.stringify(books);
console.log('JSON.stringify(books): ', booksJson);
console.log('typeof JSON.stringify(books): ', typeof booksJson);

var jsonStudent = '{ "name": "LeBron James", "id": 6 }';
console.log('jsonStudent: ', jsonStudent, 'typeof jsonStudent: ', typeof jsonStudent);
var parsedStudent = JSON.parse(jsonStudent);
console.log('parsedStudent: ', parsedStudent, 'typeof parsedStudent: ', typeof parsedStudent);
