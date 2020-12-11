function download(){
var url= document.getElementById('inputUrlVideo').value;
//var name  = document.getElementById('inputNameVideo').value;

var info = {"address" : url} ;
var data ={
    url:"/playlist",
    type:"POST",
    contentType: "application/json",
    data : JSON.stringify(info), 
};
$.ajax(data);

}




    



