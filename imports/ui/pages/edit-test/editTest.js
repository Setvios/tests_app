import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import './editTest.html';

Template.editTest.helpers({
	test () {
		const id = FlowRouter.getParam("editId");
		const test = Tests.findOne({_id: id});
		return test;
	}
});


Template.editTest.events({
	  'submit .edit-test-form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const testName = target.testName.value;
    const level = target.level.value;
    const quantity = target.quantity.value;
    //const id = FlowRouter.getParam("editId")

    // Insert a task into the collection
    Tests.update({
			_id: FlowRouter.getParam("editId")	
    	},
    	{$set:
    	{	
      	testName: testName,
      	level: level,
      	quantity: quantity,
      	createdAt: new Date(), // current time
    }}); 

    // Clear form
    target.testName.value = '';
    target.level.value = '';
    target.quantity.value = '';

    FlowRouter.go('/');
  },  
});

