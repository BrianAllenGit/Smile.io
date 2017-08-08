import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  discount: DS.attr('number'),
  published: DS.hasMany('book')
});
