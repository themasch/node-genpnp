module.exports = {
  baseRE: /^([<>]?=)?(\w+-\w+)\/(\S+)$/m,
  nameRE: /^(\S+?)((-(([\d.]+)?-?(r\d+)?))|:([\d.]+))*$/m,
  parse: function(str)
  {
    var data    = this.baseRE.exec(str);
    var named   = this.nameRE.exec(data[3]);
    var name    = (named && named.length > 0) ? named[1] : data[3];
    var version = (named && named.length > 0) ? named[4] : undefined;
    var slot    = (named && named.length > 0) ? named[7] : undefined;
    return {
      prefix: data[1],
      group: data[2],
      name: name,
      version: version,
      slot: slot
    };
  }
};