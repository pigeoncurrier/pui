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

var decrittato = "ug27kMEDNh77nDxLi";
if (process.argv[2]) {
    decrittato = process.argv[2];
}

var crittato = com.pigeon.crypto.cryptString(decrittato);
var encodato= com.pigeon.base64.base64_encode(""+crittato);

console.log("Input:   " + decrittato);
console.log("Crypt:   " + crittato);
console.log("Encoded: " + encodato);
