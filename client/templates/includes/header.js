Template.header.helpers({
    currentSearch: function() { return Session.get('currentSearch'); },

    userDetail: function(){
        return Meteor.user();
    }

});