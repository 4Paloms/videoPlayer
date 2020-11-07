const {Router} = require('express');
const youtubedl = require('youtube-dl')
const fs = require('fs')
const ffmpeg = require('ffmpeg');
const { title } = require('process');
const router = new Router();

router.get("/",(req,res) => {res.render("index")});

router.get("/playlist",(req,res)=>{res.render("playlist")})

router.post("/playlist" , (req,res) => {
    console.log((req.body.address))
    var url = req.body.address
    var video = youtubedl(url,['--format=18'],{ cwd: __dirname })
    
       video.on('info', function(info) {
        console.log('Download started')
        console.log('filename: ' + info._filename)
        console.log('size: ' + info.size)

        video.pipe(fs.createWriteStream("public/assets/videos/"+info._filename));
      })
    
     
      
      
     
})

module.exports = router;