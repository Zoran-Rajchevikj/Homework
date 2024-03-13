// 2. make a function in another file (Simple hello world) and use it in another file -> local module


function sayHello(){
    console.log("Hello World");
}
module.exports={
    sayHello,
}
