let userName = "Mac";

function alerts(param1, param2){
    // alert(param1 + param2);
    console.log(param1 + " " + String(param2) + userName);
}

function showMessage(){
    let message = `Hello bruv ` + userName + `, this is a javascript message`;
    userName = "Allister";
    console.log(message);
}

alerts(1,2);
console.log(userName + " before");
showMessage();
console.log(userName + " after");

// local copy of a variable, function parameter

function localVarFunction(from, text){
    from = 'local var here :' + from + text + 'uni check';

    console.log(from + text);
}
let from = "Allison";
console.log("from before is : " + from);

localVarFunction(`wonton`,`text here` );

console.log(from);

//default arguements for function

function defaultArgsFunc(text){
    // console.log(from+text);
    // old javascript
    if(text === undefined){
        text = "not";
    }
    console.log(text);
}

defaultArgsFunc();

// return values in function. :

function check(exp){
    if(exp > 0.5){
        console.log("Step by Step.");
        return true;
    }
    else{
        console.log("get more projects and build more now");
    }
}

function nextSteps(exp){
    if(!check(exp)){
        return;
    }
    else{
        console.log("Just find a way and move forward step by step.")
    }
}

check(0.4);
nextSteps(1);


function checkAge(age) {
    if(age>=18){
        return true;
    }
    else {
        return false;
    }
}

function movie(age){
    if(!checkAge(age)){
        console.log("nah");
        return;
    }
    else{
        console.log("showing you the movie");
    }
}

checkAge(19);
movie(20);
let age = 10;
age>18 ? console.log("ye") : console.log("nah");

let sayHi = function(){
    console.log("hello");
}

let func = sayHi;
func();

let saySup = () => {
    console.log("sup");
}

saySup();