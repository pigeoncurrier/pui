

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
Router.route('/property_data/', function () {


    var mailRef = this.params.query.mailRef;


    if(!mailRef){                  // mail wins on logged user

        var user = Meteor.user();
        if(!user){                 // not mail or logged? go away
            this.render('accessDenied');
        } else {                   // get data for the user
            var userProperty = Property.findOne({owner: user._id});
            return {propertyData:{property:userProperty, user:user}}
        }

    } else {                       // getting here from a mail

        //TODO: decode mail ref
        var userProperty = Property.findOne({_id: this.params.query.propertyId});

        if(userProperty.owner){    // got an activation for an hotel with an owner? mmmmmmm
            //TODO: make it on another TPL?
            this.render('accessDenied');
        } else {                   // push property data an let the hotelier to build a login
            this.render('propertyInput', {propertyData:{property:userProperty, user:{}}} );
        }

    }


});

Router.route('/request_detail/:request_id', function () {
    this.render('userRequestDetail', {

        data: function () {
            var userRequest = UserRequest.findOne({_id: this.params.request_id});
            return userRequest
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

Router.onBeforeAction(requireLogin, {only: 'userRequests'});





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




