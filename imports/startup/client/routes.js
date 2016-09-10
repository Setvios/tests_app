FlowRouter.route('/', {
	name: 'home',
	action () {
		BlazeLayout.render('main_layout', {main: 'tests'});
	}
});

FlowRouter.route('/add-test', {
	name: 'addTest',
	action () {
		BlazeLayout.render('main_layout', {main: 'addTest'});
	}
});

FlowRouter.route('/test/:id', {
	name: 'test',
	action () {
		BlazeLayout.render('main_layout', {main: 'test'});
	}
});

FlowRouter.route('/questions-add/:testId', {
	name: 'questions-add',
	action () {
		BlazeLayout.render('main_layout', {main: 'questions_add'});
	}
});