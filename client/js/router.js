Router.configure({
    layoutTemplate: 'blankLayout'
});
Router.route('/', {name: 'login'});


Router.configure({
    layoutTemplate: 'kekLayout'
});
Router.route('/home', {name: 'home'});
Router.route('/create', {name: 'inputForm'});
Router.route('/detail', {name: 'detail'});
