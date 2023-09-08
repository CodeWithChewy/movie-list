const express = require('express');
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development'])

var cors = require('cors');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello! This server is up and running.")
})

app.get('/movies', (req, res) => {
    knex('movies')
        .select('*')
        .then((movies) => {
            var movies = movies.map((movie) => movie);
            res.json(movies)
        })
})
app.listen(port, () => console.log(`Express is listening on port ${port}`));