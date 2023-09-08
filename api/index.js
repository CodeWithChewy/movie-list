const express = require('express');
const app = express();
const port = 8080

app.get("/", (req, res) => {
    res.send("Hello! This server is up and running.")
})

app.listen(port, () => console.log(`Express is listening on port ${port}`));