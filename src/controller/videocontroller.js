const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');
const video = require('../videoObject');

module.exports = class videocontroller{
    constructor(){
        let db = new sqlite3.Database("./db/multimedia.db");
        this.db = db;
    }

    
     insert (video){
        console.log("HELLO")
        this.db.run('Insert into video (id,filename,poster,json) VALUES (? , ? ,? ,?)',
        [video.id, video.filename, video.poster , video.json],function(err){
            if (err) {
                return console.log(err.message);
            }else {
              // get the last insert id
              console.log('A row has been inserted with rowid');
            }
        });
            
    }
    selectAll (){
        let list = [];
        let sql = "select * from video";
        return new Promise ((resolve,reject) => {
            this.db.all(sql,[],(err,rows) => {
                if(err){
                    throw err;
                    reject(err);
                }else{
                    rows.forEach((row)=>{
                        var videoObj = new video(row.filename,row.poster,row.json);
                        
                        videoObj.id = row.id;
                        console.log(list.push(videoObj));
                        resolve (list);
                    })
                }
            })
        })
        
        
    }
    selectById(){

    }
}   
    
    
    


