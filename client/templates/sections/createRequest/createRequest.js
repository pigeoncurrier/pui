// put here (?) the property collection code to do the autocomplete servers side

Template.createRequest.events({
    'keyup .property-search-input': function(e) {

        var currentSearch = $(e.target).val().trim();
        Session.set("currentSearch", currentSearch);

    }
});






