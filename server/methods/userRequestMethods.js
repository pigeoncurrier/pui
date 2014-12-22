//TODO: use method instead of publish
/*
Meteor.methods({
    getUserSubmittedRequests: function(){
        var user = Meteor.users.find(this.userId);
        if(!user){
            return false;
        }
        var userId = user.id;
        //TODO: fetch requests by userID!!
        var submittedRequests = UserRequest.find({userId:userId});
        console.log(JSON.stringify(submittedRequests));
        return submittedRequests;
    }
})
*/