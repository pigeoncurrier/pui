
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

        var propertyId = $(e.target).attr("meta-attr");
        var selectedPropertyArray = Session.get('selectedProperties');

        if(propertyId){
            var selectedPropertyArray     = com.pigeon.util.toggleObjInArrayMatchingKey(
                                                                                        selectedPropertyArray,
                                                                                        {_id:propertyId},
                                                                                        "_id"
                                                                                        );

            Session.set('selectedProperties', selectedPropertyArray);
        }

    }
});