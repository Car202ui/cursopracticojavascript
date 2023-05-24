function newuser(name,edad,ciudad){
var name= name||'carlos';
var edad= edad||36;
var ciudad= ciudad||'bogota';
console.log(name,edad,ciudad);
}
newuser();

function newadmin(name='admin',edad=56,ciudad='CO'){
    console.log(name,edad,ciudad);  
}
newadmin();