import {
  test,
  moduleForComponent
} from 'ticker/tests/helpers/module_for';

moduleForComponent('template-less');

test("template", function(){
  var component = this.subject();
  ok(this.$());
});
