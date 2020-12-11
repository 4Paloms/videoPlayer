const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');
const responce = require('../responceObject')


module.exports = class responceController{
    constructor(){
        let db = new sqlite3.Database("./db/multimedia.db");
        this.db = db;
    }

    
     insert (responce){
        console.log("HELLO")
        this.db.run('Insert into responces (responce_id, video) VALUES (? , ?)',
        [responce.id_responce, responce.video],function(err){
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
        let sql = "select * from responces";
        return new Promise ((resolve,reject) => {
            this.db.all(sql,[],(err,rows) => {
                if(err){
                    throw err;
                    reject(err);
                }else{
                    rows.forEach((row)=>{
                        var responceObj = new responce(row.id_responce,row.video);
                        
                        responceObj.time = row.time;
                        console.log(list.push(responceObj));
                        resolve (list);
                    })
                }
            })
        })
        
        
    }
    
}