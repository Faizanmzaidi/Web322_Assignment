const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Full Name - Student Number');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
