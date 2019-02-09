require('dotenv').config();

const { getShelves } = require('../services/goodreads');

exports.handler = async function(event, context, callback) {
  if (event.httpMethod !== 'GET') return { statusCode: 404, body: '' };

  const shelves = await getShelves();

  return {
    statusCode: 200,
    body: JSON.stringify(shelves),
  };
};
