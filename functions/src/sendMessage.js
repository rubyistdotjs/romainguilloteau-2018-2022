require('dotenv').config();

const mailer = require('@sendgrid/mail');
const isEmail = require('validator/lib/isEmail');
const isEmpty = require('validator/lib/isEmpty');
const normalizeEmail = require('validator/lib/normalizeEmail');
const escapeHTML = require('validator/lib/escape');

mailer.setApiKey(process.env.SENDGRID_API_KEY);

function validateEmail(email) {
  return email && isEmail(email);
}

function validateContent(content) {
  if (!content || isEmpty(content)) return false;

  const contentLength = content.trim().length;
  return contentLength >= 42 && contentLength <= 42000;
}

function validate(payload) {
  return validateEmail(payload.email) && validateContent(payload.content);
}

function buildMessage(payload) {
  const email = normalizeEmail(payload.email, {
    gmail_remove_dots: false,
    gmail_remove_subaddress: false,
    outlookdotcom_remove_subaddress: false,
    yahoo_remove_subaddress: false,
    icloud_remove_subaddress: false,
  });

  return {
    email,
    content: escapeHTML(payload.content).trim(),
  };
}

exports.handler = async function(event, context, callback) {
  if (event.httpMethod !== 'POST') return { statusCode: 404, body: '' };

  const payload = JSON.parse(event.body);
  if (!validate(payload)) return { statusCode: 400, body: '' };

  const message = buildMessage(payload);

  await mailer.send({
    from: process.env.MAILER_SENDER_EMAIL,
    to: process.env.MAILER_RECIPIENT_EMAIL,
    subject: 'Nouveau message',
    replyTo: message.email,
    text: message.content,
  });

  return {
    statusCode: 201,
    body: JSON.stringify(message),
  };
};
