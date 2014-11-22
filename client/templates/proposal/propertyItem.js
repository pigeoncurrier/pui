Template.propertyItem.events({
    'click #someids': function(e) {

        e.preventDefault();

        var propertyId    = parseInt($(e.target).attr("meta-attr"));
        var propertyToAdd = Property.findOne({id:propertyId});
        // manage an array of properties

        var selectedPropertyArray = Session.get('selectedProperties');
        if(!_.isArray(selectedPropertyArray)){
            Session.set('selectedProperties', [propertyToAdd]);
        } else {
            Session.set('selectedProperties', [propertyToAdd]);
        }











    }
});
