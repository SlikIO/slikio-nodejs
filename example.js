//Example for using this package
require("coffee-script");
var SlikIO = require("./slikio").SlikIO;

var slikio = new SlikIO("prvkey_080618f6837fe75d8511");

slikio.sendData("col_3b057f15e4", {
  user: 'daniel',
  email: 'daniel@slik.io',
  age: 17,
  money: 413
});
