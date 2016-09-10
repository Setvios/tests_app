import { Template } from 'meteor/templating';
import { Tests } from '../../../api/tests.js';
import './tests.html';
import './testsItem.html';
import './tests.css';

Template.tests.helpers({
	tests() {
		return Tests.find({}, { sort: { createdAt: -1 } });
	},
});

Template.testsItem.events({
  'click .delete'() {
    Tests.remove(this._id);
  }
});