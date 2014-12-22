Template.propertyInput.events({

    'submit #propertyForm': function(e) {

//        //TODO: da finire!!! VALIDATION!!!

        e.preventDefault();
//
//        //TODO: non prendere tutti i dati di sessione ma solo gli id!
//        var selectedProperties = Session.get('selectedProperties');
//
//
//        var mailToBeSent = [];
//        if(selectedProperties){
//            for (var i = 0; i < selectedProperties.length; i += 1) {
//                var selectedProperty    = selectedProperties[i];
//                var propPriceSelector   = '[name=price_p_' + selectedProperty.id +  ']';
//                var price = $(e.target).find(propPriceSelector).val();
//                selectedProperties[i].price  = price;
//                selectedProperties[i].status = com.pigeon.util.requestStatusEnum.PENDIGN
//                mailToBeSent.push(selectedProperties[i].price)
//            }
//        };

        console.log("just before data collection");





        var address =  _.clean($(e.target).find('[id=streetLine1]').val() + " " + $(e.target).find('[id=streetLine2]').val())

        var propertyData = {
            firstName:      $(e.target).find('[id=firstName]'       ).val(),
            lastName:       $(e.target).find('[id=lastName]'        ).val(),
            email:          $(e.target).find('[id=email]'           ).val(),
            password:       $(e.target).find('[id=password]'        ).val(),
            phone:          $(e.target).find('[id=phone]'           ).val(),
            propertyName:   $(e.target).find('[id=propertyName]'    ).val(),
            stars:          $(e.target).find('[id=stars]'           ).val(),
            address:        address,
            city:           $(e.target).find('[id=city]'            ).val(),
            state:          $(e.target).find('[id=state]'           ).val(),
            zip:            $(e.target).find('[id=zip]'             ).val(),
            country:        $(e.target).find('[id=country]'         ).val(),
            propertyId:     $(e.target).find('[id=propertyId]'      ).val()
        };



        console.log(JSON.stringify(propertyData));



//        //TODO: manage errors! and move it to a method
//        userRequestElement._id = UserRequest.insert(userRequestElement);
//        var justBuiltRequest = {id:userRequestElement._id}
//        var dataForMail = {propertyMailSet: mailToBeSent, userRequestId:userRequestElement._id};
//        console.log(JSON.stringify(dataForMail));
//

//        // send mails
        Meteor.call('insertPropertyUser', propertyData);




//
//
//        Router.go('userRequests', justBuiltRequest);




    }
});


Template.propertyInput.helpers({

    notCurrentUser: function(){return !Meteor.user()},

    propertyData: function(){

        var user = Meteor.user();
        if(!user){
            return {}
        }

        var userProperty = Property.findOne({owner: user._id});

        return {property:userProperty, user:user}

    }

});