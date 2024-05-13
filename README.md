# Nest.js + mikro-orm example

Starting from version 6.2.0, mikro-orm now offers support for MSSQL. In one of our projects, we had the need for both MSSQL and MongoDB connections. Here's a concise example demonstrating how we configured Nest.js and mikro-orm to seamlessly handle both connections.

(Note: Apologies for any inconsistencies in file names and structure; the primary focus here is on the setup process itself.)

### Test

1. `npm ci`
2. `cp .env.example .env` and adjust the secrets
2. Find `replace-me` and replace with any existing table/collection
3. `npm run start`
4. Access: http://localhost:3003/mongo
5. Access: http://localhost:3003/mssql
