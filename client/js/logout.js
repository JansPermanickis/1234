import '../html/logout.html';

Template.logout.events({
    'click .js-logout' : function(){
      Meteor.logout(function () {
        Router.go('/');
    })
},

});
