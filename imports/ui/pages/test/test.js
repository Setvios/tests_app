import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import { Questions } from '../../../api/questions.js';
import './test.html';
import './test.css';
import '../../pages/test/questionItem.html';

Template.test.helpers ({
	test() {
		const id = FlowRouter.getParam("id");
		const test = Tests.findOne({_id: id});
		console.log(test)
		return test;
	},
	questions() {
		return Questions.find({}, { sort: { createdAt: -1 } });
	}
});
