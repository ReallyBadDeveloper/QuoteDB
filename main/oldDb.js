const fs = require("fs")

function getDB(){
    return JSON.parse(fs.readFileSync("../db/db.json","utf-8"))
}
function setDB(data){
    return fs.writeFileSync("../db/db.json",JSON.stringify(data),"utf-8")
}

const gg = (id,file="")=>"../db/"+id+"/"+file

function setup(){
    if(!fs.existsSync("../db")){
        fs.mkdirSync("../db")
    }
    if(!fs.existsSync("../db/db.json")){
        fs.writeFileSync("../db/db.json",JSON.stringify({'quotes':[]}),"utf-8")
    }
    let db = getDB()
    if(typeof(db.quotes)==="undefined"){
        db.quotes = []
        setDB(db)
    }
}
setup()

var quoteIdRegex = /".+" *- *<@(\d+)>,? *\d*/


var db = getDB()
setInterval(()=>{
    setDB(db)
},5000)

module.exports.createGuild = (id)=>{
    if(!fs.existsSync("../db/"+id)){
        fs.mkdirSync("../db/"+id)
    }
}

module.exports.add = (quote, user, userID,guildId) => {
    // try {
    //     if (quote.length >= 350) {
    //         return "Quote can't be bigger than 350 characters!";
    //     }
    //     let quoteId = quoteIdRegex.exec(quote)[1]; //this is who the quote was about
    //     db.quotes.unshift({ reporterId: userID, quotedId: quoteId, quote: quote });
    //     setDB(db); // Save the updated database
    //     return "Added quote!";
    // } catch (err) {
    //     console.warn(err);
    //     return "Something went wrong when adding the quote to the DB!";
    // }
    return "Not implemented."
};


//return array of quotes
module.exports.getQuotes = function(guildId,count=20){
    try{
        let quotes = []

    }catch(err){
        console.warn(err)
        return `Something went wrong when retrieving last ${count} quotes!`
    }
    return ["Not implemented."]
}

//get quotes from a user id
module.exports.getQuotesFrom = function(userID){
    // try{
    //     return db.quotes.filter((e)=>e.reporterId==userID)
    // }catch(err){
    //     console.warn(err)
    //     return `Something went wrong when retrieving last quotes from <@${userID}>!`
    // }
    return ["Not implemented."]
}

//get all quotes of a person
module.exports.getQuotesOf = function(userID){
    // try{
    //     return db.quotes.filter((e)=>e.quotedId==userID)
    // }catch(err){
    //     console.warn(err)
    //     return `Something went wrong when retrieving last quotes of <@${userID}>!`
    // }
    return ["Not implemented."]
}