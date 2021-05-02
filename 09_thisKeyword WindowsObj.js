//It Points to Global window object even if it isused in an inner function

var myVar = 200;

function Demo(){
    myVar = 100;
    console.log(myVar); //100
    console.log(this.myVar); //200
}

Demo()


function sample(){
    function demo1(){
        myVar = 100;
        console.log(myVar); //100
        console.log(this.myVar); //200
    }
    demo1();
}

sample();