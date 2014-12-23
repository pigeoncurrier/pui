Template.propertyItem.events({
    'click #someids': function(e) {

        e.preventDefault();

        var propertyId    = $(e.target).attr("meta-attr");
        var propertyToAdd = Property.findOne({_id:propertyId});

        if(propertyToAdd){
            var selectedPropertyArray = Session.get('selectedProperties');
            if(!_.isArray(selectedPropertyArray)){
                selectedPropertyArray = [];
            }
            selectedPropertyArray     = com.pigeon.util.toggleObjInArrayMatchingKey(selectedPropertyArray, propertyToAdd, "_id");
            Session.set('selectedProperties', selectedPropertyArray);
        }

    }
});
