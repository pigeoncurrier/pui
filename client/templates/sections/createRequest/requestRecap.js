
Template.requestRecap.helpers({

    // properties data from session
    selectedProperties: function(){
        var selectedProperties = Session.get('selectedProperties');
        return selectedProperties
    }
});

/**
 * event list:
 *      click #removeProp - click on session hotels to be removed
 *
 */
Template.requestRecap.events({
    'click #removeProp': function(e) {

        e.preventDefault();

        var propertyId = parseInt($(e.target).attr("meta-attr"));
        var selectedPropertyArray = Session.get('selectedProperties');

        if(propertyId){
            var selectedPropertyArray     = com.pigeon.util.toggleObjInArrayMatchingKey(
                                                                                        selectedPropertyArray,
                                                                                        {id:propertyId},
                                                                                        "id"
                                                                                        );

            console.log("setting:");
            console.log(JSON.stringify(selectedPropertyArray));

            Session.set('selectedProperties', selectedPropertyArray);
        }

    }
});