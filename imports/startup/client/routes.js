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

FlowRouter.route('/test/:id', {
	name: 'test',
	action () {
		BlazeLayout.render('main_layout', {main: 'test'});
	}
});