const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req,res) => {
    res.send('About page');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});