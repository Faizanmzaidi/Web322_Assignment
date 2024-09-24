const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Syed Faizan Mehdi Zaidi - 136151230');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
