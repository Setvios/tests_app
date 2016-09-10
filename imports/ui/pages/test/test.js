import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import { Questions } from '../../../api/questions.js';
import './test.html';
import './test.css';
import '../../pages/test/questionsItem.html';

Template.test.helpers ({
	test() {
		const id = FlowRouter.getParam("id");
		const test = Tests.findOne({_id: id});
		return test;
	},
	questions() {
		const id = FlowRouter.getParam("id");
		return Questions.find({testId: id}, { sort: { createdAt: -1 } });
	}
});
