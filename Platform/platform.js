//Collections
Users = new Meteor.Collection('user_s');
Games = new Meteor.Collection('games_s');
Scores = new Meteor.Collection('scores_s');


//Routes
Router.configure({
	layoutTemplate: 'main',
	name: 'main'
});
Router.route('/', {
  name: 'home',
  template: 'home'
});
Router.route('/user/:_id', {
    template:"UserPage",    
    name:"UserPage", 
    data: function(){
      var userID = this.params._id;
      return Meteor.users.findOne({_id:userID});
    },
    onBeforeAction: function(){
      var currentUser = Meteor.userId();
      if(currentUser){
        // logged-in
        this.next();  //hace que la ruta se comporte de forma normal
      } else {
        // not logged-in
        this.render("login"); //rediriges a login
      }
    }
});
Router.route('/configGame', {
  name: 'configGame',
  template: 'configGame'
});
Router.route('/comenzarPartida/:_id', {
    template:"startGame",    
    name:"startGame", 
    data: function(){
      var gameID = this.params._id;
      return Games.findOne({_id:gameID});
    }
});
Router.route('/register');
Router.route('/login');




if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}