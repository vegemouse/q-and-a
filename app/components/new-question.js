import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    questionFormHide() {
      this.set('addNewQuestion', false);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "Anonymous",
        question: this.get('question') ? this.get('question') : "Why didn't I enter a question?",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
