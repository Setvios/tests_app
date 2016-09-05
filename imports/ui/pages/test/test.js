import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import { Questions } from '../../../api/questions.js';
import './test.html';
import './test.css';
import '../../components/question_single.html';
import '../../components/question_single.css';

Template.test.helpers ({
	testcursor() {
		const id = FlowRouter.getParam("id");
		const cursor = Tests.findOne({_id: id});
		console.log(cursor)
		return cursor;
	},
	questions() {
		return Questions.find({}, { sort: { createdAt: -1 } });
	}
});
