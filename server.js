// Redeploy trigger change
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Syed Faizan Mehdi Zaidi - 136151230');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
