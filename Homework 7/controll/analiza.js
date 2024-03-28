const fs = require("fs");

const getAnaliza = async(req, res) => {
    try{
        let output = await  parseTemplate("form");
        res.send(output);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal server error");
    }
}

const postAnaliza = async(req, res) => {
const { txt } = req.body;
if (txt ===""){
    return res.send("Bad request");
}
console.log(txt);
    let numChar = txt.length;
    let words = txt.split(/\s+|\.|,|!|\?/).filter(word => word.trim() !=="");
    console.log(words);
    let wordsWithLessThan5char;
    wordsWithLessThan5char = words.filter(num => num.length < 5).length;
    let wordsWithMoreThan5Char = words.filter(num => num.length > 5).length;
    let wordsWith5Char = words.filter(num => num.length === 5).length;
    let numSentences = txt.split(/\.|\?|\!/).length;
    let numWords = words.length;
try {
    let result = await parseTemplate("analiza", {numChar:numChar,wordsWithMoreThan5Char:wordsWithMoreThan5Char,
        wordsWithLessThan5char:wordsWithLessThan5char,
        wordsWith5Char:wordsWith5Char,
        numSentences:numSentences,
        numWords:numWords});
    res.send(result);
} catch (err){
        console.log(err);
        res.status(500).send("Internal server error");
}

}


const parseTemplate= async (template , data = null)=>{

    return new Promise((success , fail)=>{
        fs.readFile(
            `${__dirname}/../views/${template}.html`,
            "utf-8", (err, content) =>{
                if(err){
                    return fail(err);
                }if (data){
                    for (d in data){
                        content = content.replaceAll(`{{${d}}}`,data[d]);
                    }
                }
                return success(content);
            }
        )
    })
}
module.exports = {
    getAnaliza,
    postAnaliza
}