const {Router} = require('express');
const router = new Router();

router.get("/",(req,res) => {res.render("index")});

router.get("/playlist",(req,res)=>{res.render("playlist")})

module.exports = router;