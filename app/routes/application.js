import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  serviceA: service(),

  model() {
    this.serviceA.hi();
  }
});
