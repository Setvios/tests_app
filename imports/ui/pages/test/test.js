import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import './test.html';
import './test.css';

Template.test.helpers ({
	testcursor() {
		const id = FlowRouter.getParam("id");
		const cursor = Tests.findOne({_id: id});
		console.log(cursor)
		return cursor;
	}
});