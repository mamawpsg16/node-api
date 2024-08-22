import express from 'express';
const router = express.Router()

router.get("/about", (req, res) => {
    res.send('about')
})

router.post("/contact", (req, res) => {
    res.send('contact')
})

export default router;