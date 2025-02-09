const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my server');
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});
