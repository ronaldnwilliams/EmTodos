import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | todo-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.todo = EmberObject.create({
      name: 'test-name',
      complete: false
    });
  });

  test('should display todo name', async function(assert) {
    await render(hbs`{{todo-listing todo=todo}}`);
    assert.equal(this.element.querySelector('.todo h3').textContent.trim(), 'test-name', 'Name: test-name');
  });

  test('should toggle strike through on todo when clicked', async function(assert) {
    await render(hbs`{{todo-listing todo=todo}}`);
    assert.equal(this.element.getElementsByTagName('s').length, 0, 'there should be no strike tags so length should be 0');
    await click('.todo');
    assert.equal(this.element.getElementsByTagName('s').length, 1, 'clicked todo. there should be one strike tag so length should be 1');
    await click('.todo');
    assert.equal(this.element.getElementsByTagName('s').length, 0, 'clicked todo again. there should be no strike tags again so length should be 0');
  });
});
