import { Template } from 'meteor/templating';
import { Questions } from '../../../api/questions.js';
import './questions_add.html';
import './questions_add.css';

Template.questions_add.events({
  'submit .add-questions-form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const question = target.question.value;
    const testId = FlowRouter.getParam('testId');

    // Insert a task into the collection
    Questions.insert({
      question,
      testId: FlowRouter.getParam('testId'),
      createdAt: new Date(), // current time
    }); 

    // Clear form
    target.question.value = '';

    FlowRouter.go(`/questions-add/${testId}`);
  },  
});