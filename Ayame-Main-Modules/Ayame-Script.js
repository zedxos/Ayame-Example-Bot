function AyameScript() {
  /*Required Modules - */
  require('dotenv')
  const Discord = require('discord.js'),
        AyameClient = new Discord.Client(),
        AyameReady = require('./Event-Checker/ready.js'),
        Db = require('quick.db'),
        Fetch = require('node-fetch'),
        Token = process.env.DISCORD_TOKEN,
        Prefix = 'a!';
  
  /*Commands - */
  const AnimeMemeCommand = require('./src/Commands/Anime/AnimeMeme.js');
  
  /*Functions for Cmds - */
  const EmbedTemplate = require('./src/Functions/EmbedTemplate.js'),
        AnimeMemeFunction = require('./src/Functions/AnimeRedditMeme.js');
  
  /*Emojis - */
  const { notice } = require('./Emojis.js');
  
  AyameClient.on('ready', () => {
    console.clear;
    AyameReady(AyameClient);
  })
  
  AyameClient.on('message', async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    if(!msg.content.startsWith(Prefix)) return;
    
    const args = msg.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'animememe') AnimeMemeCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Fetch, AnimeMemeFunction);
  })
  
  AyameClient.login(process.env.DISCORD_TOKEN)
}
module.exports = AyameScript;
