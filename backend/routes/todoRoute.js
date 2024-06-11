import {getTodo, postTodo, updateTodo, deleteTodo} from '../controllers/todoController.js'
import {Router} from 'express'

const router = Router()

router.post('/post', postTodo)
router.get('/get', getTodo )
router.put('/update', updateTodo)
router.delete('/delete', deleteTodo)

export default router