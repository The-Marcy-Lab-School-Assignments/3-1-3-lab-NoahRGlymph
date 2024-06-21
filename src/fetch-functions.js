export const getFirstThreeFantasyBooks = async () => {
  const url = 'https://openlibrary.org/subjects/fantasy.json';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to get fantasy books');
    }

    const data = await response.json();

    // Extract the first 3 books from the response and format them
    const books = data.works.slice(0, 3).map(work => ({
      title: work.title,
      author: {
        name: work.authors[0].name,
        urlKey: work.authors[0].key
      },
      coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
    }));

    return books;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};



export const getAuthor = async (urlKey) => {
  const baseUrl = 'https://openlibrary.org';
  const fullUrl = `${baseUrl}${urlKey}.json`;

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error('Failed to get author');
    }

    const data = await response.json();

    // Format the author object
    const author = {
      birthDate: data.birth_date,
      bio: data.bio,
      wikipediaUrl: data.wikipedia,
      name: data.name,
      pictureUrl: data.photos && data.photos.length > 0 ? `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg` : null
    };

    return author;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};





export const createNewUser = async (user) => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Failed to create new user');
    }

    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

