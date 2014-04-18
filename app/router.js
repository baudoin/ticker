var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  // this.route('component-test');
  // this.route('helper-test');
  this.resource('beers', function(){
    this.route('new');
  });

  this.resource('beer', { path: 'beers/:beer_name' });

  this.resource('brewers', function(){
    // this.route('brewer', { path: ':brewer_id' });
    this.route('new');
  });

  this.resource('users', { path: '/users' });
  this.resource('user', { path: '/user/:user_id' });
});

export default Router;
