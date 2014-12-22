Template.propertyItem.events({
    'click #someids': function(e) {

        e.preventDefault();

        var propertyId    = parseInt($(e.target).attr("meta-attr"));
        var propertyToAdd = Property.findOne({id:propertyId});

        if(propertyToAdd){
            var selectedPropertyArray = Session.get('selectedProperties');
            if(!_.isArray(selectedPropertyArray)){
                selectedPropertyArray = [];
            }
            selectedPropertyArray     = com.pigeon.util.toggleObjInArrayMatchingKey(selectedPropertyArray, propertyToAdd, "id");
            Session.set('selectedProperties', selectedPropertyArray);
        }

    }
});
