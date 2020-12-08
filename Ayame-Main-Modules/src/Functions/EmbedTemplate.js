const { MessageEmbed } = require("discord.js"),
       Color = 'ffffff'

function EmbedTemplate() {
  
  return new MessageEmbed()
    .setColor(Color)
}

module.exports = EmbedTemplate;