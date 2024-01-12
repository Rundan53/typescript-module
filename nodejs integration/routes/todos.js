"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json('successfully added');
});
router.put('/todo/update/:id', (req, res) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex] = { id: todoId, text: req.body.text };
        return res.status(200).json({ messaage: 'successfully updated' });
    }
    res.status(404).json('todo not found');
});
router.delete('/todo/delete/:id', (req, res) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        todos = newTodos;
        return res.status(200).json({ message: 'Deleted successfully' });
    }
    res.status(404).json({ message: 'Todo with the specific id not found' });
});
exports.default = router;
