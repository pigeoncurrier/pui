Meteor.methods({
    insertPropertyUser: function(data){

// we are creating a new user so no user check! here as an example....
//        var user = Meteor.users.find(this.userId);
//        if(!user){
//            return false;
//        }
//

        var newPropertyUser = false;
        // is he logged?
        if(!this.userId){

            var user = Meteor.users.findOne({"emails.address": data.email});

            // is a new user
            if(!user){
                newPropertyUser = Accounts.createUser({
                    email :     data.email,
                    password :  data.password,
                    profile  : {
                        firstName:  data.firstName,
                        lastName:   data.lastName,
                        isProperty: true
                    }
                });
            } else {
                console.log(data.email + "was present as another user sorry");
                // not logged and existing??
                // bad things are happening
                //TODO: return some kind of error!
                return false;
            }
        }
        // else is logged in and i dont want to allow a password change like that
        // TODO: ADD A PASSWORD RESET MAIL


        if(!newPropertyUser && !this.userId){
            //TODO throw an error cause was not logged or new user created
            return false;
        }

        var userId = newPropertyUser?newPropertyUser:this.userId;



        //how to find a property
        var updateOrInsertQs = {_id:data.propertyId};
        // what to update/insert
        var propertyData = {
            name:       data.propertyName,
            stars:      data.stars,
            mail:       data.email,
            phone:      data.phone,
            address:    data.address,
            city:       data.city,
            state:      data.state,
            zip:        data.zip,
            country:    data.country,
            status:     com.pigeon.util.propertyStatusEnum.NOT_ACTIVE,
            owner:      userId
        }

//        // exec update or insert
        //TODO: manage errors
        var operationResult = Property.upsert(updateOrInsertQs,propertyData);

        //TODO: multiple hotel per user to be done
        var insertedPropertyId = operationResult.insertedId;
        if(insertedPropertyId){
            Meteor.users.update( { _id: userId }, { $set: { 'profile.properties': [insertedPropertyId] }} );
        }

        return true;

    }
})