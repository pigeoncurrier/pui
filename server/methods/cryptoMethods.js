Meteor.methods({
    decryptJson: function(data){


        console.log("decrypting" + data);


        var input = JSON.parse(com.pigeon.crypto.decryptString(data));
        return input;
    }
})

