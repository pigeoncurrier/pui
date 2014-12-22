Template.userRequests.helpers({

    submittedRequests: function(){

        //TODO:use the method instead of the find
/*
        Meteor.call('getUserSubmittedRequests', post, function(error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);
            Router.go('postPage', {_id: result._id});
        });
*/

        return UserRequest.find();

    },

    // TODO: move it in util!
    getLabelFromRequestStatus: function (statusAsNum) {

        if (statusAsNum == com.pigeon.util.requestStatusEnum.PENDIGN) {
            return "PENDING";
        } else if (statusAsNum == com.pigeon.util.requestStatusEnum.PROPOSAL) {
            return "Request accepted!";
        } else if (statusAsNum == com.pigeon.util.requestStatusEnum.REJECTED) {
            return "Sorry your request was rejected";
        }

        return "status unrecognized";
    }

    /*
    ,


    getActionFromRequestStatus: function (statusAsNum) {
        if (statusAsNum === come.pigeon.util.requestStatusEnum.PENDIGN) {
            return 0;
        } else if (statusAsNum === come.pigeon.util.requestStatusEnum.PROPOSAL) {
            return "propertyProposalDetails";
        } else if (statusAsNum === come.pigeon.util.requestStatusEnum.REJECTED) {
            return 0;
        }
    }*/

});