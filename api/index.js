const server = require('./src/app.js');
const PORT = 3001;
// Syncing all the models at once.
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
  });
