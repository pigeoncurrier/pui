UserRequest = new Mongo.Collection('userRequest');

UserRequest.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    }
});
