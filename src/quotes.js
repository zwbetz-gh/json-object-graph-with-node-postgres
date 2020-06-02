const db = require('./shared/db');
const io = require('./shared/io');
const dao = require('./shared/dao');

let pool = null;

async function buildObject(id) {
  const obj = await dao.getQuote(pool, id);

  const author = await dao.getAuthor(pool, obj.authorId);
  obj.author = author ? {...author} : {};

  return obj;
}

function massageObject(obj) {
  delete obj.authorId;
  delete obj.author.id;
}

async function buildObjects() {
  const res = await dao.getQuoteIds(pool);
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

    const filename = 'quotes.json';
    io.writeJsonFile(filename, objs);
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}

main();
