const app = require('./server.js');

const PORT = 8040;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

// app.get('/db', controller.get);
// app.get('/*/:id/homesData', controller.getListings);
