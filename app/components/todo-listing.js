import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateTodo() {
      console.log('saved: ' + this.todo.name);
    }
    // toggleComplete() {
    //   this.set('todo.complete', !this.todo.complete);
    // },
    // toggleEdit() {
    //   console.log(this);
    // }
  }
});
