const {Router} = require('express');
const youtubedl = require('youtube-dl')
const fs = require('fs')
const router = new Router();

router.get("/",(req,res) => {res.render("index")});

router.get("/playlist",(req,res)=>{res.render("playlist")})

router.post("/playlist" , (req,res) => {
    console.log((req.body.name))
    var url = req.body.name
    var video = youtubedl(url,['--format=18'],{ cwd: __dirname })
    console.log("Se va a descargar", video)

    video.on('info', function(info) {
        console.log('Download started')
        console.log('filename: ' + info._filename)
        console.log('size: ' + info.size)
      })
      
      video.pipe(fs.createWriteStream('myvideo.mp4'))
})

module.exports = router;