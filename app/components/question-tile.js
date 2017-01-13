import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if(confirm("You sure you wanna delete this question? (Please only delete your own question...)")) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
