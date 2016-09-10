import { Template } from 'meteor/templating';
import { Questions } from '../../../api/questions.js';
import './addQuestion.html';
import './addQuestion.css';

Template.addQuestion.events({
  'submit .add-question-form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const question = target.question.value;
    const testId = FlowRouter.getParam('testId');

    // Insert a task into the collection
    Questions.insert({
      question,
      testId,
      createdAt: new Date(), // current time
    }); 

    // Clear form
    target.question.value = '';

    //FlowRouter.go(`/questions-add/${testId}`);
  },  
});