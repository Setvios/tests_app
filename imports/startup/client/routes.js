FlowRouter.route('/', {
	name: 'home',
	action () {
		BlazeLayout.render('main_layout', {main: 'tests'});
	}
});

FlowRouter.route('/tests-add', {
	name: 'tests_add',
	action () {
		BlazeLayout.render('main_layout', {main: 'tests_add'});
	}
});