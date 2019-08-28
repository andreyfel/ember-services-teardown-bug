import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | services', function(hooks) {
  setupApplicationTest(hooks);

  test('Services teardown', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
