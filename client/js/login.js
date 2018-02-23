Template.login.onCreated(function () {
    setHeader({title:"Hello", isBackVisible:false});
})
Template.login.events({
  'click #jsLogin': function (e){
    let login = $('#loginField').val();
    let password = $('passwordField').val();
    // console.log(login, password);
    Meteor.loginWithPassword(login, password, function(e){
      if(e){
        console.log(e.reason);
      }
      else{
        console.log('success');
      }
    })
  }
})
