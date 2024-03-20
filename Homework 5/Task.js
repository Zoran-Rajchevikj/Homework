// Homework
// 1. kreirajte server
// 2. na ruta /home/imePrezimePol -> res.end(<imetoPrezimetoPolot>), first letter of each should be capital
// 3. na ruta /home/title -> dodadete title na rutata
// 4. na ruta /home/header -> dodadete header so vrednost "Ova e Header-ot!"
// Optional na handler funkcijata za kalkulator od ovoj cas dodadete modul(%), kvadrat(n^2) i kub (n^3)

const http = require("http");
const url = require("url");


const server = http.createServer((req, res)=>{
    const url = req.url;

    if(url === "/home/imePrezimePol"){

        res.end("Zoran Rajchevikj Male");
    }
    if(url === "/home/title"){
    res.write("<html> <head> <title>This is the new title</title> </head> </html>")  ;

    }
    if(url === "/home/header"){

        res.setHeader("Header", "Ova e Header-ot!");

    }

    res.end();
});
server.listen(8000);

const handlerCalculator = (req, res) => {
    const url = req.url;

    const [_, operacija, num1, num2] = req.url.split("/");

    let result;

    switch(operacija){
        case "sobiranje":
            result = Number(num1) + Number(num2);

            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(num1) - Number(num2);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(num1) * Number(num2);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(num1) / Number(num2);
            res.end(`${result}`);
            break;
        case "modul":
            result =Number(num1) % Number(num2);
            res.end(`${result}`);
            break;
        case "kvadrat":
            result = num1*num1;
            res.end(`${result}`);
            break;
        case "kub":
            result =num1*num1*num1;
            res.end(`${result}`);
            break;
        default:
            res.end("Nepoznata operacija");
    }
}

const newServer = http.createServer(handlerCalculator);

newServer.listen(8080);