const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json())

app.get("/api/users", (req, res) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ message: "Error in reading file!" })
            return
        }

        const users = JSON.parse(data).users;
        res.json(users)
    })
})

app.post("/api/users", (req, res) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ message: "Error in reading file!" })
            return
        }

        const users = JSON.parse(data).users;
        const newUser = { id: Date.now(), ...req.body }
        users.push(newUser);

        fs.writeFile("db.json", JSON.stringify({ users }), (err) => {
            if (err) {
                res.status(500).json({ message: "Error in writing file" })
                return;
            }

            res.status(201).json(newUser)
        })
    })
})

app.put("/api/users/:id", (req, res) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ message: "Error in reading file!" })
            return
        }

        const users = JSON.parse(data).users;
        // const userIndex = users.findIndex((user) => user.id == req.params.id);
        const updatedUsers = users.filter(el => el.id !== req.params.id)

        if (userIndex === -1) {
            res.status(404).json({ message: "User not found!" })
            return
        }

        // users[userIndex] = { id: req.params.id, ...req.body }
        console.log(req.body)

        fs.writeFile("db.json", JSON.stringify({ users }), (err) => {
            if (err) {
                res.status(500).json({ message: "Error in writing file" })
                return;
            }

            res.status(201).json(users[userIndex])
        })
    })
})

app.listen(8080, (err) => {
    console.log("Listening to port 8080")
})
