Friends = new Meteor.Collection('friends')

if (Meteor.isClient) {

}

if (Meteor.isServer) {

}
Router.route('/', {
  name: 'home',
  template: 'home'
});