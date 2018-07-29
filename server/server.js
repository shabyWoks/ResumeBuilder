const express = require('express');
const path = require('path');

const app = express();
const port = 8080;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/api/test', (req, res) => {
    res.send("Hello");
});

app.get('*', (req, res) => {
    console.log('Calling..');
    res.sendFile(path.join(publicPath, 'index.html'));
})



app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})