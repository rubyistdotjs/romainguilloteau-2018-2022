const axios = require('axios');
const { parseString } = require('xml2js');

const { GOODREADS_API_KEY, GOODREADS_USER_ID } = process.env;

const api = axios.create({
  baseURL: 'https://www.goodreads.com/',
  params: { key: GOODREADS_API_KEY },
});

function parseResponse(res, callback) {
  return parseString(
    res.data,
    {
      explicitRoot: false,
      explicitArray: false,
      ignoreAttrs: true,
    },
    callback
  );
}

function getShelves() {
  return new Promise((resolve, reject) => {
    api
      .get('shelf/list.xml', { params: { user_id: GOODREADS_USER_ID } })
      .then(res =>
        parseResponse(res, (err, json) => {
          if (err) reject(err);
          resolve(json.shelves.user_shelf);
        })
      )
      .catch(err => reject(err));
  });
}

function formatBook(review) {
  const { book } = review;
  const author = Array.isArray(book.authors.author)
    ? book.authors.author[0]
    : book.authors.author;

  return {
    id: book.id,
    cover_url: book.image_url,
    title: book.title_without_series,
    description: book.description,
    author: author.name,
    link: book.link,
    read_at: review.read_at,
  };
}

function getShelfBooks({
  shelf,
  sort = 'date_read',
  order = 'd',
  per_page = 6,
  page = 1,
}) {
  return new Promise((resolve, reject) => {
    api
      .get('review/list', {
        params: {
          v: '2',
          shelf,
          sort,
          order,
          page,
          per_page,
          id: GOODREADS_USER_ID,
        },
      })
      .then(res =>
        parseResponse(res, (err, json) => {
          if (err) reject(err);
          const { review } = json.reviews;
          const reviews = Array.isArray(review) ? review : [review]
          const books = reviews.map(r => formatBook(r));
          resolve(books);
        })
      )
      .catch(err => reject(err));
  });
}

module.exports = {
  getShelves,
  getShelfBooks,
};
