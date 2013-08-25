This is a Node.js package for SlikIO - Charts as a service.

#Installation
To get the package, install Node.js and npm, then run:
`npm install slikio`

This package uses CoffeeScript and jQuery.
#Usage
First, register to http://slik.io and get the Private API Key, then initialize the framework:
```javascript
require("coffee-script");
var SlikIO = require("./slikio").SlikIO;

var slikio = new SlikIO("prvkey_080618f6837fe75d8511");
```
#Pushing data to collections
To start pushing data to your SlikIO collections, use the `sendData` method:
`slikio.sendData('COLLECTION_ID', data);`
Example:
```javascript
slikio.sendData("col_3b057f15e4", {
  userId: '123123',
  email: 'user@email',
  action: "planPurchased",
  cost: 150.0
});
```