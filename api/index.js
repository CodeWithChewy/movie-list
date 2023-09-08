const express = require('express');
const knex = require('knex')
    (require('./knexfile.js')['development'])
const knexfile = require('./knexfile.js')
const app = express();
const port = 8080

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! This server is up and running.")
})

app.get('/movies', (req, res) => {
    knex('movies')
        .select('*')
        .then((movies) => {
            var movies = moves.map((movie) => movie);
            res.json(movies)
        })
})
app.listen(port, () => console.log(`Express is listening on port ${port}`));