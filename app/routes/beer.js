export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('beer', params.beer_name);
  }
});
