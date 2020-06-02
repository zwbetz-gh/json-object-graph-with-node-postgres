const sql = require('./sql');
const db = require('./db');

async function getAuthorIds(pool) {
  const text = sql.findAuthorIds;
  const params = null;
  const res = await db.query(pool, text, params);
  return res.rows;
}

async function getQuoteIds(pool) {
  const text = sql.findQuoteIds;
  const params = null;
  const res = await db.query(pool, text, params);
  return res.rows;
}

async function getAuthor(pool, id) {
  const text = sql.findAuthor;
  const params = [id];
  const res = await db.query(pool, text, params);
  return res.rows[0];
}

async function getQuote(pool, id) {
  const text = sql.findQuote;
  const params = [id];
  const res = await db.query(pool, text, params);
  return res.rows[0];
}

async function getQuotes(pool, id) {
  const text = sql.findQuotes;
  const params = [id];
  const res = await db.query(pool, text, params);
  return res.rows;
}

module.exports = {
  getAuthorIds,
  getQuoteIds,
  getAuthor,
  getQuote,
  getQuotes
};
