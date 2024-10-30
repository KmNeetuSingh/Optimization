const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json()); 

// Routes for Users
const usersRouter = express.Router();
usersRouter.get('/', (req, res) => res.send('Get all users'));
usersRouter.post('/', (req, res) => res.send('Add a user'));
usersRouter.put('/:id', (req, res) => res.send(`Update user with ID: ${req.params.id}`));
usersRouter.delete('/:id', (req, res) => res.send(`Delete user with ID: ${req.params.id}`));

// Routes for Todos
const todosRouter = express.Router();
todosRouter.get('/', (req, res) => res.send('Get all todos'));
todosRouter.post('/', (req, res) => res.send('Add a todo'));
todosRouter.put('/:id', (req, res) => res.send(`Update todo with ID: ${req.params.id}`));
todosRouter.delete('/:id', (req, res) => res.send(`Delete todo with ID: ${req.params.id}`));

// Register routers
app.use('/users', usersRouter);
app.use('/todos', todosRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
