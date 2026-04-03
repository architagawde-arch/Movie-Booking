const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "movie_booking"
});

db.connect(err => {
    if (err) 
        throw err;
    console.log("Connected to DB");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/book", (req, res) => {
    const { name, email, movie, tickets, total } = req.body;

    const sql = "INSERT INTO bookings (name,email,movie,tickets,total) VALUES (?,?,?,?,?)";

    db.query(sql, [name, email, movie, tickets, total], (err) => {
        if (err) throw err;
        res.send("<h2>Booking Successful</h2><a href='/'>Go Back</a>");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});