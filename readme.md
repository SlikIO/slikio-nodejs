This is a Node.js package for SlikIO - Charts for developers.

#Installation
To get the package, install Node.js and npm, then run:
`npm install slikio`

#Usage
First, register to http://slik.io and get the Private API Key, then initialize the framework:
```javascript
var SlikIO = require("slikio")("YOUR_PRIVATE_API_KEY");
```
#Pushing data to collections
To start pushing data to your SlikIO collections, use the `sendData` method:
`SlikIO.sendData('COLLECTION_ID', data, function callback(data){});`
Example:
```javascript
SlikIO.sendData("col_3b057f15e4", {
  userId: '123123',
  email: 'user@email',
  action: "planPurchased",
  cost: 150.0
},
function(data) {console.log("Response" + data)});
```