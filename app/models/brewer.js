export default DS.Model.extend({
  'name': DS.attr('string'),
  'beers': DS.hasMany('beer', {async: true})
});
