// put here (?) the property collection code to do the autocomplete servers side

console.log("i'm here! in proposal");

Template.proposal.events({
    'keyup .property-search-input': function(e) {




        var currentSearch = $(e.target).val();

        console.log("into blur got:" + currentSearch);

        Session.set("currentSearch", currentSearch);


    }
});


