import Service, { inject as service } from '@ember/service';

export default Service.extend({
  serviceB: service(),

  hi() {
    console.log('Hi from ServiceA');
  },

  init() {
    console.log('ServiceA init');
    this._super(...arguments);
  },

  willDestroy() {
    console.log('ServiceA willDestroy');
    this.serviceB.hi();
    this._super(...arguments);
  }
});
