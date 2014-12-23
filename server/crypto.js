com.pigeon.crypto = (function(namespace){

    var _this = namespace ? namespace : {};

    var passphrase = "cowo3601!";

    var _cryptString = function(decrypted){
        //console.log("Crypting " + decrypted + "...");
        var encrypted = CryptoJS.AES.encrypt(decrypted.toString(CryptoJS.enc.Utf8), passphrase);
        //console.log("..." + encrypted);
        return encrypted;

    }

    var _decryptString = function(encrypted){
        //console.log("Decrypting " + encrypted + "...");
        var decrypted = CryptoJS.AES.decrypt(encrypted, passphrase);
        //console.log("..." + decrypted.toString(CryptoJS.enc.Utf8));
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    _this.cryptString =_cryptString;
    
    _this.decryptString =_decryptString;

    return _this;
    
})(com.pigeon.crypto);


