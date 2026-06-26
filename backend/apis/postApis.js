import express from 'express'
import { addproduct, deleteproduct, getproduct, updateproduct } from '../controllers/postController.js'
export const postRouter = express.Router()

postRouter.post('/add-product', addproduct)
postRouter.get('/get-product', getproduct)
postRouter.put('/update-product', updateproduct)
postRouter.delete('/delete-product', deleteproduct)

export default postRouter;