const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the Frontend folder
app.use(express.static(path.join(__dirname, '../Frontend')));

let users = [];  // Store registered users (currently in memory)

// Basic route to test if the server is up
app.get("/", (req, res) => {
    res.send("Hello, welcome to the server!");
});

// Register endpoint
app.post("/register", (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match!" });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "This email is already taken!" });
    }

    users.push({ email, password });  // Save the password directly (not recommended for production)
    res.status(201).json({ message: "Registration successful!" });
});

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (user && user.password === password) {
        res.json({ message: "Login successful!", token: "fake-jwt-token" });
    } else {
        res.status(401).json({ message: "Invalid email or password!" });
    }
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
