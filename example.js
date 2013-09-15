//Example for using this package
var SlikIO = require("./slikio")("prvkey_eab6a8782fad021f73d1");

console.log(SlikIO);

console.log(SlikIO.sendData("col_d19f18b7bd6dcff3a9cf", {
  user: 'daniel',
  email: 'daniel@slik.io',
  age: 17,
  money: 413
}, function(data) {console.log("RECIEVED: " + data)} 
));
