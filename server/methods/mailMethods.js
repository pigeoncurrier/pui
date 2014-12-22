Meteor.methods({
    sendRequestMailSet: function(data){

        console.log("in send mail");


        var user = Meteor.users.find(this.userId);
        if(!user){
            return false;
        }

        var mailToBeSent   = data.propertyMailSet;
        var userRequestId  = data.userRequestId;

        //TODO: move it into a util mail class
        // add checks!!
        for(var i= 0; i<mailToBeSent.length; i++){
            Email.send({
                from: "pigeon.currier@gmail.com",
                to: mailToBeSent[i],
                subject: "You have a new request from a Pigeon user!",
                text: "Hi you have a new stay request from a Pigeon user\n check http://localhost:3000/reques_details/?reqid=" + userRequestId
            });
        }

        Email.send({
            from: "pigeon.currier@gmail.com",
            to: user.emails[0].address,
            subject: "you have sent a stay request",
            text: "Your request was correctly forwarded to the selected properties."
        });
    }
})