

Router.configure({
    layoutTemplate: 'layout'
    // loadingTemplate: 'loading',
    // snotFoundTemplate: 'notFound'
    // waint on that by now  ,waitOn: function() { return Meteor.subscribe('property'); }
});


Router.route(
    '/',
    {
        name: 'proposal',

        data: function(){

            console.log("into routing");

            var currentSearch = Session.get('currentSearch');
            return (currentSearch?Property.find({name:currentSearch}):{})
        }
    });

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
 */


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

// things for permissions
/*
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
*/




