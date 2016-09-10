import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import './addTest.html';
import './addTest.css';

Template.addTest.events({
  'submit .add-test-form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const testName = target.testName.value;
    const level = target.level.value;
    const quantity = target.quantity.value;

    // Insert a task into the collection
    Tests.insert({
      testName,
      level,
      quantity,
      createdAt: new Date(), // current time
    }); 

    // Clear form
    target.testName.value = '';
    target.level.value = '';
    target.quantity.value = '';

    FlowRouter.go('/');
  },  
});
