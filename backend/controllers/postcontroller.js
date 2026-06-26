import { postProduct } from "../model/postModel.js"

export const addproduct = async(req, res) => {
    const { image, name, price } = req.body
    const newpost = await postProduct.create({
        image,
        name,
        price,
    })
    res.send('posted')
}
export const getproduct = async(req, res) => {

    let allPost = await postProduct.find()
    res.send(allPost)

}
export const updateproduct = (req, res) => {
    res.send('post updated')
}
export const deleteproduct = (req, res) => {
    res.send('post deleted')
}