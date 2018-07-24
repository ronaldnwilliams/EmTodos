import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list todos', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to todos from home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/todos', 'should redirect automatically');
  });

  test('should link to about page', async function (assert) {
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact page', async function (assert) {
    await visit('/');
    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list all todos', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.todo').length, 3, 'should display 3 todos');
  });

  test('should add todo to todos when added', async function (assert) {
  });

  test('should strike todo when checked', async function (assert) {
  });

  test('should remove striked todos when update button clicked', async function (assert) {
  });

});
