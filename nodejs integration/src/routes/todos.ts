import {Router} from 'express';
import Todo from '../models/Todo';

const router = Router();

let todos: Todo[] = [];

type ReqBody = {text: string}
type ReqParams = {id: string}

router.get('/', (req, res)=> {
    res.status(200).json({todos: todos});
});


router.post('/todo', (req, res)=> {
    const body = req.body as ReqBody

    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }

    todos.push(newTodo)
    res.status(201).json('successfully added') 
});


router.put('/todo/update/:id',(req, res)=> {
    const params = req.params as ReqParams;
    const body = req.body as ReqBody;
    const todoIndex = todos.findIndex(todo => todo.id === params.id);

    if(todoIndex !== -1){
        todos[todoIndex] = {id: params.id, text: body.text};
        return res.status(200).json({messaage: 'successfully updated'});
    }
    
    res.status(404).json('todo not found');
})


router.delete('/todo/delete/:id', (req, res)=> {
    const params = req.params as ReqParams
    const todoIndex = todos.findIndex(todo=> todo.id === params.id);

    if(todoIndex !== -1){
        const newTodos = todos.filter(todo=>todo.id !== params.id);
        todos = newTodos;
        
        return res.status(200).json({message: 'Deleted successfully'});
    }
    
    res.status(404).json({message: 'Todo with the specific id not found'})
})


export default router;