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

app.post('/movies', (req, res) => {
    const newMovie = req.body;

    if (!newMovie.title) {
        return res.status(400).json({ error: 'Missing required fields in the request body' });
    }
    knex('movies')
        .insert(newMovie)
        .then(() => res.status(201).json(`The new movie, ${newMovie.title}, has been added`))
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        });
});
app.delete('/movies', (req, res) => {
    const title = req.body.title;
    knex('movies')
        .where('title', title)
        .del()
        .then(() => res.json(`The movie with the title "${title}" has been deleted.`))
        .catch((err) => res.status(500).json(err));
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));