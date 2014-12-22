Meteor.methods({
    sendRequestMailSet: function(data){

        var sendEnabled = false;
        
        if (!sendEnabled) {
            console.log("Send mail disabled");
        }

        var user= Meteor.users.findOne(this.userId);
        
        if(!user){
            console.log("ERROR");
            return false; 
        }

        var mailToBeSent   = data.propertyMailSet;
        var userRequestId  = data.userRequestId;

        //TODO: move it into a util mail class
        // add checks!!
        for(var i= 0; i<mailToBeSent.length; i++) {
            var emailToHotel = {
                from:       "pigeon.currier@gmail.com",
                to:         mailToBeSent[i],
                subject:    "You have a new request from a Pigeon user!",
                text:      "Hi you have a new stay request from a Pigeon user. Check http://localhost:3000/reques_details/?reqid=" + userRequestId + "\""
            };
            // console.log(JSON.stringify(emailToHotel));
            LogEmail.insert(emailToHotel);
            
            if (sendEnabled) {
                Email.send(emailToHotel);
            }
        }

        var emailToUser = {
            from:       "pigeon.currier@gmail.com",
            to:         user.emails[0].address,
            subject:    "You have sent a stay request",
            text:      "Your request was correctly forwarded to the selected properties."
        };
        // console.log(JSON.stringify(emailToSend2));
        
        LogEmail.insert(emailToUser);
        
        if (sendEnabled) {
            Email.send(emailToUser);
        }
    }
})