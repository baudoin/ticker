export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('beer', params.beer_id);
  },
  serialize: function(model, params) {
    return { beer_id: model.get('slug') };
  }
});
