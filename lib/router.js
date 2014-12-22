

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
    // notFoundTemplate: 'notFound'
    // waint on that by now  ,waitOn: function() { return Meteor.subscribe('property'); }
});

Router.route('/request',            {name: 'createRequest'} );
Router.route('/submitted_requests', {name: 'userRequests'}  );
Router.route('/',                   {name: 'home'}          );

//TODO: make it a smarter logic and move it into some namespace
Router.route('/property_data/', function () {

    var mailRef = this.params.query.mailRef;
    if(!mailRef){
        this.render('accessDenied');
    } else {
        this.render('propertyInput', {data:{mailRef:mailRef}});
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


var checkReferenceFromMail = function(data){

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




