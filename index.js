const express = require("express"),
      app = express(),
      path = require("path"),
      port = 3000;
      
app.get('/',function(req, res) {
  res.sendFile(path.join(__dirname+'/Website/index.html'));
})

app.listen(port, () =>
console.log(`Ayame Port - http://localhost:${port}`)
/*?*/
);

var AyameCore = require('./Ayame-Core/core-start.js'),
    AyameScript = require('./Ayame-Main-Modules/Ayame-Script.js'),
    Token = process.env.DISCORD_TOKEN;
    
AyameCore(AyameScript, Token);
