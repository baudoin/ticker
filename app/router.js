var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  // this.route('component-test');
  // this.route('helper-test');
  this.resource('beers', { path: '/beers' }, function(){
    this.resource('beer', { path: ':beer_id' });
    this.route('new');
  });

  this.resource('brewers', function(){
    this.route('new');
  });

  this.resource('brewer', { path: '/brewer/:brewer_id' });

  this.resource('users', { path: '/users' });
  this.resource('user', { path: '/user/:user_id' });
});

export default Router;
