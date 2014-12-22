
Template.requestStepThree.helpers({

    // properties data from session
    selectedProperties: function(){
        var selectedProperties = Session.get('selectedProperties');
        return selectedProperties
    }
});