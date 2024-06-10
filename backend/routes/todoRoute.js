import {postTodo} from '../controllers/todoController.js'
import {Router} from 'express'

const router = Router()

router.post('/post', postTodo)

export default router