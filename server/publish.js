// publishing hotels data excluding private locator properties


Meteor.publish('property', function() {
    return Property.find(
        {
            fields: {
                cityId: false
            }
        }
    );
});
