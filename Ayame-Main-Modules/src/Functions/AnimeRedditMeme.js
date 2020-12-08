function AnimeMemeFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Fetch) {
 Fetch('https://www.reddit.com/r/Animemes.json?limit=100&?sort=top&t=all')
    .then(res => res.json())
    .then(json => json.data.children)
    .then(posts => {
    const {title, url} = posts[Math.floor(Math.random() * posts.length)].data;
    const embed = new EmbedTemplate()
    .setTitle(`${notice}${title}`)
    .setImage(url)
    .setFooter(`Reddit r/AnimeMemes`, `https://cdn.discordapp.com/avatars/745140408694079559/aef5b91aa29e1e5dd70a1550bd7e25d8.png?size=1024`)
    msg.channel.send(embed);
    })
}
module.exports = AnimeMemeFunction;