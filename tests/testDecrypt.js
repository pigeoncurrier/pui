/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var CryptoJS = require("/usr/local/lib/node_modules/crypto-js");

var fs = require('fs');

com = {};
com.pigeon = {};

// file is included here:
eval(fs.readFileSync('/home/alessiofelici/Projects/Pigeon/pigeon/lib/base64.js')+'');
eval(fs.readFileSync('/home/alessiofelici/Projects/Pigeon/pigeon/server/crypto.js')+'');

var encodato = "VTJGc2RHVmtYMS9pZ2ZOTzBkSGovdjFHMEQwNE1mejlpYlFXQ0lmdUZLblZCNWhzV2I1Nm1zRmdKajMyamtrTA==";

if (process.argv[2]) {
    encodato = process.argv[2];
}

var crittato = com.pigeon.base64.base64_decode(encodato);
var decrittato = com.pigeon.crypto.decryptString(crittato);

console.log("Encoded: " + encodato);
console.log("Crypt:   " + crittato);
console.log("Input:   " + decrittato);


