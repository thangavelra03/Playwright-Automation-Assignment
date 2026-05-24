const fs = require('fs');

function saveBookDetails(book) {

  const data = `
Title : ${book.title}
Author : ${book.author}
Publisher : ${book.publisher}
`;

  fs.writeFileSync(
    'book-details.txt',
    data
  );
}

module.exports = saveBookDetails;