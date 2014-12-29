Meteor.methods({
    decryptJson: function(data){

        var input = JSON.parse(com.pigeon.crypto.decryptString(data));
        return input;
    }
})

