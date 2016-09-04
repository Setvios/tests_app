import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import './tests_add.html';
import './tests_add.css';

Template.tests_add.events({
  'submit .add-tests-form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const test = target.test.value;
    const level = target.level.value;
    const quantity = target.quantity.value;

    // Insert a task into the collection
    Tests.insert({
      test,
      level,
      quantity,
      createdAt: new Date(), // current time
    }); 

    // Clear form
    target.test.value = '';
    target.level.value = '';
    target.quantity.value = '';

    FlowRouter.go('/');
  },  
});