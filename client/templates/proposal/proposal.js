// put here (?) the property collection code to do the autocomplete servers side

Template.proposal.events({
    'keyup .property-search-input': function(e) {

        var currentSearch = $(e.target).val().trim();
        console.log("into blur got:" + currentSearch);
        Session.set("currentSearch", currentSearch);

    }
});






