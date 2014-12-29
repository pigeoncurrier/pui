Template.userRequestDetail.helpers({

    getLabelFromRequestStatus: function(status){
        return com.pigeon.util.getLabelFromRequestStatus(status);
    },

    //TODO: this must go into some logic used in router (if expired...)
    getRequestLifeTime: function(creationTime){
        return (creationTime + 172800000);
    },

    isProperty:function(){
        Meteor.user().isProperty;
    }

});