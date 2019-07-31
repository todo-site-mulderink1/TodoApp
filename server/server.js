const express = require('express'), path = require('path'), app = express(), PORT = 8080;

app.use('/', express.static(path.resolve(__dirname, '../client/assets')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/views/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
