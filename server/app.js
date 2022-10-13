const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from the server!" })
// })

app.get("/api/", (req, res) => {
    res.json({ message: "This is the welcome page" })
})

app.get("/api/login", (req, res) => {
    res.json({ message: "This is the login page" })
})

app.get("/api/signup", (req, res) => {
    res.json({ message: "This is the signup page" })
})

app.get("/api/home", (req, res) => {
    res.json({ message: "This is the home page" })
})

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`)
});
