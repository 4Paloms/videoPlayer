const { v4: uuidv4} = require ('uuid');

module.exports = class videoObject {
    constructor(filename,poster,json){
        this.filename=filename;
        this.poster=poster;
        this.json=json;
        this.id = uuidv4();   
    } 
}
