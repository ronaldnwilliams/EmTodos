import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        name: 'walk dog',
        complete: false
      },
      {
        id: 2,
        name: 'refill coffee',
        complete: false
      },
      {
        id: 3,
        name: 'pet cats',
        complete: false
      }];
  }
});
