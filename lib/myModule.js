var md5 = require('md5-node');

module.exports = function(name) {
  if(name === "john") {
    return md5("beech");
  }
  else {
    return "unknown name";
  }
};
