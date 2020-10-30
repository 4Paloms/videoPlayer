const {Router} = require('express');
const youtubedl = require('youtube-dl')
const router = new Router();

router.get("/",(req,res) => {res.render("index")});

router.get("/playlist",(req,res)=>{res.render("playlist")})

router.post("/playlist" , (req,res) => {res.json(res.body)})

module.exports = router;