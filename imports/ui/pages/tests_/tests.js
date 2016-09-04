import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import './tests.html';
import './test_single.html';
import './tests.css';

Template.tests.helpers({
	tests() {
		return Tests.find({}, { sort: { createdAt: -1 } });
	},
});

Template.test_single.events({
  'click .delete'() {
    Tests.remove(this._id);
  }
});