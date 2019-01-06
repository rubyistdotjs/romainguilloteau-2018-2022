require('dotenv').config();

const { getShelves, getShelfBooks } = require('../services/goodreads');

function orderShelves(shelves) {
  const order = process.env.GOODREADS_SHELVES.split(',').map(s => s.trim());
  return shelves
    .filter(s => order.includes(s.name))
    .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
}

function fillShelves(shelves) {
  return Promise.all(
    shelves.map(shelf =>
      getShelfBooks({ shelf: shelf.name }).then(books => ({
        name: shelf.name,
        books_count: shelf.book_count,
        books,
      }))
    )
  );
}

exports.handler = async function(event, context, callback) {
  if (event.httpMethod !== 'GET') return { statusCode: 404, body: '' };

  const unorderedShelves = await getShelves();
  const orderedShelves = orderShelves(unorderedShelves);
  const shelves = await fillShelves(orderedShelves);

  return {
    statusCode: 200,
    body: JSON.stringify(shelves),
  };
};
