// publishing hotels data excluding private locator properties

Meteor.publish('property', function() {
    return Property.find();
});

Meteor.publish('userRequest', function() {
    return UserRequest.find({userId:this.userId});
});
