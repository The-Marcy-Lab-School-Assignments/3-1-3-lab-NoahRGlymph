export const renderBookList = (bookListEl, books) => {
  // Clear existing children
  bookListEl.innerHTML = '';

  // Iterate over the books array and create li elements
  books.forEach(book => {
    // Create li element
    const li = document.createElement('li');

    // Create img element
    const img = document.createElement('img');
    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`;
    
    // Create p element
    const p = document.createElement('p');
    p.textContent = `Title: ${book.title}`;
    
    // Create button element
    const button = document.createElement('button');
    button.textContent = `View ${book.author.name}`;
    button.setAttribute('data-author-url-key', book.author.urlKey);

    // Append img, p, and button to li
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(button);

    // Append li to bookListEl
    bookListEl.appendChild(li);
  });
};



export const renderAuthorInfo = (authorDiv, author) => {
  // Clear existing children
  authorDiv.innerHTML = '';

  // Create and append h2 element with author name
  const h2 = document.createElement('h2');
  h2.textContent = author.name;
  authorDiv.appendChild(h2);

  // Create and append img element with picture URL and alt text
  const img = document.createElement('img');
  img.src = author.pictureUrl;
  img.alt = `A picture of ${author.name}`;
  authorDiv.appendChild(img);

  // Create and append p element with birth date
  const pBirthDate = document.createElement('p');
  pBirthDate.textContent = `Born: ${author.birthDate}`;
  authorDiv.appendChild(pBirthDate);

  // Create and append p element with bio
  const pBio = document.createElement('p');
  pBio.textContent = author.bio;
  authorDiv.appendChild(pBio);

  // Create and append a element with Wikipedia link
  const a = document.createElement('a');
  a.href = author.wikipediaLink;
  a.textContent = 'Wikipedia Link';
  authorDiv.appendChild(a);
};

// Export the function to make it available for import in other files



export const renderNewUserForm = (formEl) => {
  // Clear existing children
  formEl.innerHTML = '';

  // Create label and input for username
  const usernameLabel = document.createElement('label');
  usernameLabel.setAttribute('for', 'username');
  usernameLabel.textContent = 'Username';
  const usernameInput = document.createElement('input');
  usernameInput.id = 'username';
  usernameInput.name = 'username';

  // Create label and input for "Is this user cool?"
  const isCoolLabel = document.createElement('label');
  isCoolLabel.setAttribute('for', 'is-cool');
  isCoolLabel.textContent = 'Is this user cool?';
  const isCoolInput = document.createElement('input');
  isCoolInput.id = 'is-cool';
  isCoolInput.name = 'isCool';
  isCoolInput.type = 'checkbox';

  // Create label and select for favorite language
  const favoriteLanguageLabel = document.createElement('label');
  favoriteLanguageLabel.setAttribute('for', 'favorite-language');
  favoriteLanguageLabel.textContent = 'Favorite Language';
  const favoriteLanguageSelect = document.createElement('select');
  favoriteLanguageSelect.id = 'favorite-language';
  favoriteLanguageSelect.name = 'favoriteLanguage';

  // Create options for the select
  const languages = ['None', 'JavaScript', 'Python', 'Ruby'];
  languages.forEach(language => {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;
    favoriteLanguageSelect.appendChild(option);
  });

  // Create button to submit the form
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Create User';

  // Append all elements to the form
  formEl.appendChild(usernameLabel);
  formEl.appendChild(usernameInput);
  formEl.appendChild(isCoolLabel);
  formEl.appendChild(isCoolInput);
  formEl.appendChild(favoriteLanguageLabel);
  formEl.appendChild(favoriteLanguageSelect);
  formEl.appendChild(submitButton);
};



export const renderNewUser = (userDiv, user) => {
  // Clear existing children
  userDiv.innerHTML = '';

  // Create h2 element with username and dataset attribute
  const h2 = document.createElement('h2');
  h2.textContent = user.username;
  h2.dataset.userId = user.id;

  // Create p element with coolness statement
  const coolnessP = document.createElement('p');
  coolnessP.textContent = user.isCool ? 'The hippest in the house!' : 'A real square.';

  // Create p element with favorite language
  const languageP = document.createElement('p');
  languageP.textContent = `Favorite Language: ${user.favoriteLanguage}`;

  // Append all elements to the userDiv
  userDiv.appendChild(h2);
  userDiv.appendChild(coolnessP);
  userDiv.appendChild(languageP);
};

// Export the function to make it available for import in other files

