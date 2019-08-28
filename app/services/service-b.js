import Service from '@ember/service';

export default Service.extend({
  hi() {
    console.log('Hi from ServiceB');
  },

  init() {
    console.log('ServiceB init');
    this._super(...arguments);
  },

  willDestroy() {
    console.log('ServiceB willDestroy');
    this._super(...arguments);
  }
});
