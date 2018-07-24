export default function() {
  this.namespace = '/api';

  this.get('/todos', function() {
    return {
      data: [
        {
          type: 'todos',
          id: 1,
          attributes: {
            name: 'walk dog',
            complete: false
          }
        },
        {
          type: 'todos',
          id: 2,
          attributes: {
            name: 'refill coffee',
            complete: false
          }
        },
        {
          type: 'todos',
          id: 3,
          attributes: {
            name: 'pet cats',
            complete: false
          }
        }]
    };
  });
}
