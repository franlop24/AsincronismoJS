function sum(num1, num2){
    console.log("Me ejecuto dentro del callback")
    return num1 + num2;
}

function calc(num1, num2, callback){
    console.log("Me ejecuto antes de la suma")
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

function date(callback){
    console.log(new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);