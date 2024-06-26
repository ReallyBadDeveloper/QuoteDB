const {EmbedBuilder} = require("discord.js")
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
const config = require("./config.json")
const added = typeof(config.host)==="string"&&config.host!==" "?` (Being hosted by ${config.host})`:""

module.exports = ({title="QuoteDB",message,color=("#"+genRanHex(6)),footer="QuoteDB 0.9.0a"})=>{
    let embed = new EmbedBuilder()
	.setTitle(title+added)
    .setColor(color)
    .setDescription(message+"\n\nRemember that the bot is in alpha and is buggy.")
    .setFooter({"text":footer});

    return embed
}