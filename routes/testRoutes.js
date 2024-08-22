import express from 'express';
const router = express.Router()

router.get("/", (req, res) => {
    res.send('hello world')
})

router.post("/tasks", (req, res) => {
    res.status(200).json({item:[1,2,3,4]});
})

export default router;