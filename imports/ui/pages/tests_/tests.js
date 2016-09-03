import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import './tests.html';
import './test.html';
import './tests.css';

Template.tests.helpers({
	tests() {
		return Tests.find({}, { sort: { createdAt: -1 } });
	}
});
