
Router.configure({
    layoutTemplate: 'layout'
    //loadingTemplate: 'loading'
    // notFoundTemplate: 'notFound'
    // waint on that by now  ,waitOn: function() { return Meteor.subscribe('property'); }
});

Router.route('/request',            {name: 'createRequest'} );
Router.route('/submitted_requests', {name: 'userRequests'}  );
Router.route('/',                   {name: 'home'}          );

//TODO: make it a smarter logic and move it into some namespace

Router.route('/property_data/:_mailRef', function () {

    // to test call: http://localhost:3000/property_data/VTJGc2RHVmtYMSt1bGtLU01hRGRmREwwM2NJa0lqREg3RlFMMjhFT29BbmNzaExPRVNzekZqS2hmL1RPWXl1ZHJ6THFFUDdMcDJ1dmM1OXlKWU1EZ09WMy93YU8vR280VnNiVVBZSGQxWlJlNXBiVzVxQy9yeXd3Vmg2Zjd2YWo=
    // only for debug
    var sudo = true;
    
    var mailRef = com.pigeon.base64.base64_decode(this.params._mailRef);

    if(!mailRef){                  // mail wins on logged user

        var user = Meteor.user();
        if(!user){                 // not mail or logged? go away
            this.render('accessDenied');
        } else {                   // get data for the user
            var userProperty = Property.findOne({owner: user._id});
            if (!userProperty) {
                this.render('accessDenied');
            }
            return {propertyData:{property:userProperty, user:user}}
        }

    } else {                       // getting here from a mail

        var propertyid = -1;
        var _this = this;
        Meteor.call('decryptJson', mailRef, function (error, result) {
            if (error) {
                // handle error
            } else {
                propertyid = result.propertyid;
                var userProperty = Property.findOne({_id: propertyid});
                console.log(propertyid + "---->" + JSON.stringify(userProperty));


                if (!sudo && (!userProperty || userProperty.owner)) {    // got an activation for an hotel with an owner? mmmmmmm
                    //TODO: make it on another TPL?
                    _this.render('accessDenied')
                } else {                   // push property data an let the hotelier to build a login
                    _this.render('propertyInput', {data: function () { return  {property:userProperty, user:{}}}});
                }
            }
        });
    }


});

Router.route('/request_detail/:request_id', function () {


    var userRequest = UserRequest.findOne({_id: this.params.request_id});

    console.log(JSON.stringify(userRequest));


    if(!userRequest){
        this.render('accessDenied');
    } else {

        // TODO: ahahahah e il timezone???
        var expire = userRequest.creationTime +  com.pigeon.util.requestTimeToLive;
        if(Date.now()>expire){
            this.render('requestExpired')
        } else {
            this.render('userRequestDetail', { data: function () { return userRequest } });
        }

    }
});



var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};



// what is under login
Router.onBeforeAction(requireLogin, {only: ['userRequests', 'userRequestDetail']});



// Router.route('/', {name: 'postsList'});



/*

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/:_id/edit', {
    name: 'postEdit',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});



var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}
 */



// things for permissions
/*
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
*/
