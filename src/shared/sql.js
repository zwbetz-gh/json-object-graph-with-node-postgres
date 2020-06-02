const findAuthorIds = `
select
  id
from
  author
`;

const findQuoteIds = `
select
  id
from
  quote
`;

const findAuthor = `
select
  id,
  first_name as "firstName",
  last_name as "lastName"
from
  author
where
  id = $1
`;

const findQuote = `
select
  id,
  quote,
  author_id as "authorId"
from
  quote
where
  id = $1
`;

const findQuotes = `
select
  id,
  quote,
  author_id as "authorId"
from
  quote
where
  author_id = $1
`;

module.exports = {
  findAuthorIds,
  findQuoteIds,
  findAuthor,
  findQuote,
  findQuotes
};
