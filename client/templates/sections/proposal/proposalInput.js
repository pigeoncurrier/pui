Template.proposalInput.events({
    'submit #proposalForm': function(e) {

        console.log("into submit");



        //TODO: da finire!!! VALIDATION!!!
        e.preventDefault();

        //TODO: non prendere tutti i dati di sessione ma solo gli id!
        var selectedProperties = Session.get('selectedProperties');

        var userProposalElement = {
            priceRangeInt:  $(e.target).find('[name=priceRangeInt]' ).val(),
            priceRangeDec:  $(e.target).find('[name=priceRangeDec]' ).val(),
            firstName:      $(e.target).find('[name=firstName]'     ).val(),
            lastName:       $(e.target).find('[name=lastName]'      ).val(),

            address: {
                street: _.clean(
                    $(e.target).find('[name=streetLine1]'           ).val() + ' ' +
                    $(e.target).find('[name=streetLine2]'           ).val()
                ),
                city:$(e.target).find('[name=city]'                 ).val(),
                state:$(e.target).find('[name=state]'               ).val(),
                country:$(e.target).find('[name=country]'           ).val(),
                zip:$(e.target).find('[name=zip]'                   ).val()
            },

            selectedProperties:selectedProperties

        };


        console.log(JSON.stringify(userProposalElement));


        userProposalElement._id = UserProposal.insert(userProposalElement);
        //Router.go('proposal', userProposalElement);
    }
});