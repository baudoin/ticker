export default DS.Model.extend({
  'added': DS.attr('date'),
  'user': DS.belongsTo('user'),
  'slug': DS.attr('string'),
  'name': DS.attr('string'),
  'brewer': DS.belongsTo('brewer'),
  'abv': DS.attr('string'),
  'ibu': DS.attr('string'),
  'note': DS.attr('string'),
});
