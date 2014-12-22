Accounts.onCreateUser(function(options, user) {


    // We still want the default hook's 'profile' behavior.
    if (options.profile)
        user.profile = options.profile;

    // explicit setting of false on is property
    if(!user.profile.isProperty){
        user.profile.isProperty = false;
    }
    return user;

});