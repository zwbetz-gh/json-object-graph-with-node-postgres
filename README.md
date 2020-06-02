# json-object-graph-with-node-postgres

Build JSON object graphs of SQL data with Node Postgres

## Setup

1.  Install NodeJS
1.  Install dependencies

        npm install

1.  Copy file `.env.sample` to file `.env`
1.  Change the values in file `.env` to match your local Postgres database
1.  Seed your local Postgres database by running the sql in file [`src/shared/schema.sql`](src/shared/schema.sql)

## Run

For sample output see the included [`output`](output) dir

1.  Build JSON object graph for authors

        npm run authors

1.  Build JSON object graph for quotes

        npm run quotes
