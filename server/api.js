const { Pool } = require('pg');
const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const db = new Pool({
    user: 'cyf',        // replace with you username
    host: 'localhost',
    database: 'hotel',
    password: 'CYF123',
    port: 5432
});
app.get("/tours", function(req, res) {
    db.query('SELECT id, name, info, image,price FROM tours',
               (error, result) => {
                   res.json(result.rows);
    });
});
app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});