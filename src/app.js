import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'test-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  // Fetch the books!
  
  // const books =
  // render out the books
  // renderBookList

  // bookListEl.addEventListener('???', () => {})

  // newUserFormEl.addEventListener('???', () => {})
}

// Assuming the necessary functions are already imported
// import { createNewUser } from './fetch-functions';
// import { renderNewUserForm, renderNewUser } from './render-functions';

// Assuming the necessary functions are already imported
 

document.addEventListener('DOMContentLoaded', async () => {
  const formEl = document.getElementById('user-form');
  const newUserDiv = document.getElementById('user-info');
  const bookListEl = document.getElementById('book-list');
  const authorInfoDiv = document.getElementById('author-info');

  // Render the new user form
  renderNewUserForm(formEl);

  // Fetch and render the list of books
  const books = await getFirstThreeFantasyBooks();
  renderBookList(bookListEl, books);

  // Event listener for book list
  bookListEl.addEventListener('click', async (event) => {
    if (event.target.tagName === 'BUTTON') {
      const urlKey = event.target.getAttribute('data-author-url-key');
      if (urlKey) {
        const author = await getAuthor(urlKey);
        renderAuthor(authorInfoDiv, author);
      }
    }
  });

  // Form submission handler
  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(formEl);
    const user = {
      username: formData.get('username'),
      isCool: formData.get('isCool') === 'on', // Convert checkbox value to boolean
      favoriteLanguage: formData.get('favoriteLanguage')
    };

    // Create new user
    const newUser = await createNewUser(user);

    if (newUser) {
      // Render the new user
      renderNewUser(newUserDiv, newUser);
    }
  });
});


