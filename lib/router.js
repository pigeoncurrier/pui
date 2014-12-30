
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

Router.route('/property_data/:propertyId?', function () {
    if (!this.params.propertyId) {                      // mail wins on logged user
        var user = Meteor.user();
        if (!user || !user.profile.isProperty) {
            this.render('accessDenied');              // not mail or logged? go away
        } else {
            var userProperty = Property.findOne({owner: user._id}); // get data for the user
            if (!userProperty) {
                this.render('accessDenied');
            }
            this.render('propertyInput', {data: function () {
                    return  {property: userProperty, user: user}
                }});
        }
    } else {  // getting here from a mail
        var mailRef = com.pigeon.base64.base64_decode(this.params.propertyId);
        var _this = this;
        var query = {};

        Meteor.call('decryptJson', mailRef, function (error, result) {
            if (error) {
                //TODO: manage error
                console.log("error from decrypt");
            }
            var propertyId = _this.params.propertyId;
            if (result) {
                propertyId = result.propertyId;
            }
            query["_id"] = propertyId;
            //TODO: this doesn't work on FF!
            var userProperty = Property.findOne(query);
            if (!userProperty || userProperty.owner) {    // got an activation for an hotel with an owner? mmmmmmm
                //TODO: make it on another TPL?
                _this.render('accessDenied')
            } else {                                      // push property data an let the hotelier to build a login
                _this.render('propertyInput', {data: function () {
                        return  {property: userProperty, user: {}}
                    }});
            }

        });
    }
});

Router.route('/request_detail/:request_id', function () {

    var mailRef = com.pigeon.base64.base64_decode(this.params.request_id);
    var _this = this;
    Meteor.call('decryptJson', mailRef, function (error, result) {
        if (error) {
            //TODO: manage error
            console.log("error from decrypt");
        }
        var requestId = _this.params.request_id;
        if (result) {
            requestId = result.userRequestId;
        }
        var userRequest = UserRequest.findOne({_id: requestId});

        if (!userRequest) {
            _this.render('accessDenied');
        } else {
            // TODO: ahahahah e il timezone???
            var expire = userRequest.creationTime + com.pigeon.util.requestTimeToLive;
            if (Date.now() > expire) {
                _this.render('requestExpired')
            } else {
                _this.render('userRequestDetail', {data: function () {
                        return userRequest
                    }});
            }
        }
    });
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
