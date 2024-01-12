"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json('successfully added');
});
router.put('/todo/update/:id', (req, res) => {
    const params = req.params;
    const body = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === params.id);
    if (todoIndex !== -1) {
        todos[todoIndex] = { id: params.id, text: body.text };
        return res.status(200).json({ messaage: 'successfully updated' });
    }
    res.status(404).json('todo not found');
});
router.delete('/todo/delete/:id', (req, res) => {
    const params = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === params.id);
    if (todoIndex !== -1) {
        const newTodos = todos.filter(todo => todo.id !== params.id);
        todos = newTodos;
        return res.status(200).json({ message: 'Deleted successfully' });
    }
    res.status(404).json({ message: 'Todo with the specific id not found' });
});
exports.default = router;
