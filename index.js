const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hi', (req, res) => {
  res.send('Hi There');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
