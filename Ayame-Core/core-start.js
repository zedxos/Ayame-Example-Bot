function AyameCore(AyameScript, Token) {
  console.log('Connecting.');
  if(!Token) {
    throw Error('Invalid Token!');
  }
  AyameScript();
}

module.exports = AyameCore;
