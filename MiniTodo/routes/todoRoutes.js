const express = require("express");
const Todo = require("../models/Todo");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Todo
router.post("/todos", authMiddleware, async (req, res) => {
  try {
    const { title, description, isPublic } = req.body;
    const todo = new Todo({ title, description, isPublic, userId: req.user.userId });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Todos
router.get("/todos", authMiddleware, async (req, res) => {
  try {
    const userTodos = await Todo.find({ userId: req.user.userId });
    const publicTodos = await Todo.find({ isPublic: true });
    res.status(200).json({ userTodos, publicTodos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Todo
router.patch("/todos/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Todo
router.delete("/todos/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
