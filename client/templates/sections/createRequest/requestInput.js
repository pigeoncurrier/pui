Template.requestInput.events({

    'click #lowerSignIn':function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    },

    'submit #requestForm': function(e) {

        //TODO: da finire!!! VALIDATION!!!
        e.preventDefault();

        //TODO: non prendere tutti i dati di sessione ma solo gli id!
        var selectedProperties = Session.get('selectedProperties');


        var mailToBeSent = [];
        if(selectedProperties){
            for (var i = 0; i < selectedProperties.length; i += 1) {
                var selectedProperty    = selectedProperties[i];
                var propPriceSelector   = '[name=price_p_' + selectedProperty._id +  ']';
                var price = $(e.target).find(propPriceSelector).val();
                selectedProperties[i].price  = price;
                selectedProperties[i].status = com.pigeon.util.requestStatusEnum.PENDIGN
                mailToBeSent.push(selectedProperties[i].mail)
            }
        };

        var userRequestElement = {
            from:       $(e.target).find('[name=from]'    ).val(),
            to:         $(e.target).find('[name=to]'      ).val(),
            guest:      $(e.target).find('[name=guest]'   ).val(),
            rooms:      $(e.target).find('[name=rooms]'   ).val(),
            children:   $(e.target).find('[name=children]').val(),
            selectedProperties:selectedProperties,
            userId:     Meteor.userId()

        };

        //console.log(JSON.stringify(userRequestElement));

        //TODO: manage errors! and move it to a method
        userRequestElement._id = UserRequest.insert(userRequestElement);
        var justBuiltRequest = {id:userRequestElement._id}
        var dataForMail = {propertyMailSet: mailToBeSent, userRequestId:userRequestElement._id};
        console.log(JSON.stringify(dataForMail));

        // send mails
        Meteor.call('sendRequestMailSet', dataForMail);


        Router.go('userRequests', justBuiltRequest);

    }
});