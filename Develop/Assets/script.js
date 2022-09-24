var moment = require ('moment'); 
moment().format();

function go (){
    var currentTime = moment().format("HH:mm");
console.log(currentTime)
}


go;
console.log(go);
