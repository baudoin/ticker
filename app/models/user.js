export default DS.Model.extend({
  'created': DS.attr('number'),
  'name': DS.attr('string'),
  'beers': DS.hasMany('beer', {async: true})
});
