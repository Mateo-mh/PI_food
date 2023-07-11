const server = require('./src/app.js');
const PORT = 3001;
const {conn} = require('./src/db.js')
// Syncing all the models at once.
  server.listen(PORT, () => {
    conn.sync({force: true});
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
  });
