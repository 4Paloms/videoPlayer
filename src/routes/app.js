const {Router} = require('express');
const youtubedl = require('youtube-dl')
const fs = require('fs')
const extractFrame = require('ffmpeg-extract-frame');
const videoObject = require('../videoObject');
const videoController = require('../controller/videocontroller.js')
const responceController = require('../controller/responceController.js');
const responceObject = require('../responceObject.js');

const router = new Router();



router.get("/",(req,res) => { 
  var controller = new videoController();
  let videos = [];
  controller.selectAll().then(resol =>{ videos = resol
    res.render("index", {videos})}); });

router.post("/index",(req,res) => { 
  var controller = new responceController();
  console.log(req.body)
  
  var responce = new responceObject(req.body.responce,req.body.video,req.body.time);
 
  controller.insert(responce);
    
});     
  
  

router.get("/playlist",(req,res)=>{res.render("playlist")})

router.post("/playlist" , (req,res) => {
    console.log((req.body.address))
    var url = req.body.address
    var videoc = new videoController();
    var video = youtubedl(url,['--format=18'],{ cwd: __dirname })
    var videoObj=new videoObject('','','');
       video.on('info', function(info) {
        console.log('Download started')
        console.log('filename: ' + info._filename)
        console.log('size: ' + info.size) 
        
        var withoutWhiteSpace =  info._filename.replace(/ /g,"");

        
        
        video.pipe(fs.createWriteStream("public/assets/videos/"+withoutWhiteSpace));
        videoObj.filename="assets/videos/"+withoutWhiteSpace;
        

        extractFrame({
          input : 'public/'+videoObj.filename,
          output : 'public/assets/posters/'+ withoutWhiteSpace.replace(".mp4","") +'.png',
          offset : 10});
        
        videoObj.poster='assets/posters/'+ withoutWhiteSpace.replace(".mp4","") +'.png';

        
        videoc.insert(videoObj);
        res.send("La descarga ha sido satisfactoria");
      })
      
    })

    router.get("/estadisticas",(req,res) => { 
      var controller = new responceController();
      let responces = [];
      controller.selectAll().then(resol =>{ responces = resol
        res.render("estadisticas", {responces})}); });


module.exports = router;