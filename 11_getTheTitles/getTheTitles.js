const getTheTitles = function(books) {
    return books.map(book => book.title);
};
  
// console.log(getTheTitles(books));

module.exports = getTheTitles;