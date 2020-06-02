const db = require('./shared/db');
const io = require('./shared/io');
const dao = require('./shared/dao');

let pool = null;

async function buildObject(id) {
  const obj = await dao.getAuthor(pool, id);

  const quotes = await dao.getQuotes(pool, obj.id);
  obj.quotes = quotes ? [...quotes] : [];

  return obj;
}

function massageObject(obj) {
  for (const quote of obj.quotes) {
    delete quote.id;
    delete quote.authorId;
  }
}

async function buildObjects() {
  const res = await dao.getAuthorIds(pool);
  const ids = res.map((rowObj) => rowObj.id);
  const objs = [];

  for (const id of ids) {
    const obj = await buildObject(id);

    if (obj) {
      massageObject(obj);
      objs.push(obj);
    }
  }

  return objs;
}

async function main() {
  try {
    pool = db.configurePool();
    const objs = await buildObjects();

    const filename = 'authors.json';
    io.writeJsonFile(filename, objs);
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}

main();
