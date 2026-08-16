// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

// Set up tasks to be performed once on page load
window.addEventListener("load", () => {
  render();
});

// Store the reference to the <ul> element with id "reading-list" here to avoid querying the DOM repeatedly inside render().
const readingListElement = document.getElementById("reading-list");
// Render the whole reading list
function render() {
  readingListElement.innerHTML = "";

  books.forEach((book, index) => {
    const readingListItem = createListItem(book, index);
    readingListElement.append(readingListItem);
  });
}

// First child of #book-template is a <li> element.
// We will create each reading list book as a clone of this node.
const bookTemplate = document.getElementById("book-template").content.firstElementChild;
// Create a <li> element for the given book
function createListItem(book, index) {
  const li = bookTemplate.cloneNode(true); // true => Do a deep copy of the node

  li.querySelector(".title").textContent = book.title;
  li.querySelector(".author").textContent = book.author;
  li.classList.add(book.alreadyRead);
  li.querySelector(".cover").src = book.bookCoverImage;
  li.querySelector(".cover").alt = index;

  return li;
}