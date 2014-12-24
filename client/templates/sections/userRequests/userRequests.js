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




    // TODO: idem come sopra e i testtttttttttttt
    aggregatePropertiesData: function(selectedProperties){


        console.log("ciao ciao");

        var min         = false,
            max         = false,
            statusArray = [],
            response    = {};

        for(var i=0; i<selectedProperties.length; i++){
            var price = selectedProperties[i].price;

            console.log("price:" + price);

            if(!min || price<min){
                min = price;
            }

            console.log("min:" + min);

            if(!max || price>max){
                max = price;
            }

            console.log("max:" + max);

            statusArray.push(selectedProperties[i].status);

        }

        if(min==max){
            response.minAndMax = min;
        } else {
            response.minAndMax = min+"/"+max;
        }

        var mergedStatus = _.reduce(statusArray, function(memo, i){
                return com.pigeon.util.mergeRequestStatus(memo, statusArray[i]);

        })

        response.status = com.pigeon.util.getLabelFromRequestStatus(mergedStatus);

        return response;

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