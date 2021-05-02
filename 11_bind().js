let c1 = {
    x:5,
    y:10
};

let c2 ={ 
    x:75,
    y:235
};

function printfd(){
    console.log(this.x+' '+this.y);
}


let aa = printfd.bind(c1);
let bb = printfd.bind(c2);

aa();
bb();



// 00000000000000000000000000000000000000000


var myVar = 100;

function Demo(callback){
    var myVar = 200;
    callback();
};

var obj = {
    myvar : 300,
    display : function(){
        console.log(this.myvar)
    }
}


Demo(obj.display)
Demo(obj.display.bind(obj))