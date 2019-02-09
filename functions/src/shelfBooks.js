require('dotenv').config();

const { getShelfBooks } = require('../services/goodreads');

exports.handler = async function(event, context, callback) {
  if (event.httpMethod !== 'GET') return { statusCode: 404, body: '' };

  const { shelf, sort, order, page, per_page } = event.queryStringParameters;

  const books = await getShelfBooks({ shelf, sort, order, page, per_page });

  return {
    statusCode: 200,
    body: JSON.stringify(books),
  };
};
