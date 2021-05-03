const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Hello World</p>');
    res.sendFile('./views/index.html' , { root: __dirname});
});


app.get('/about', (req, res) => {
    res.sendFile('./views/about.html' , { root: __dirname});
});


// Redirect 
app.get('/about-us', (req, res) => {
    res.redirect('/about')
});


// 404 Pages
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname});
})

