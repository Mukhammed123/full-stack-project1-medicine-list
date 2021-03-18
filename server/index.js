const express = require('express');
const  bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
const { ppid } = require('process');

app.use('/api/posts', posts);

// Handle production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is listening on port ${port}`));

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>');
// });