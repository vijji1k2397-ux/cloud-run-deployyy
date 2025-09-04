const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Deploying the cloud run service using github actions!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
