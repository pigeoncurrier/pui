UserProposal = new Mongo.Collection('userProposal');
UserProposal.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    }
});