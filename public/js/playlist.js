const { application } = require("express");
const { type } = require("jquery");


function download(){
var url= document.getElementById('inputUrlVideo').value;
var info = {"name" : url} ;
var data ={
    url:"/playlist",
    type:"POST",
    contentType: "application/json",
    data : JSON.stringify(info), 
};
$.ajax(data);

}


