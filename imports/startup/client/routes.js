FlowRouter.route('/', {
	name: 'home',
	action () {
		BlazeLayout.render('mainLayout', {main: 'tests'});
	}
});

FlowRouter.route('/add-test', {
	name: 'addTest',
	action () {
		BlazeLayout.render('mainLayout', {main: 'addTest'});
	}
});

FlowRouter.route('/test/:id', {
	name: 'test',
	action () {
		BlazeLayout.render('mainLayout', {main: 'test'});
	}
});

FlowRouter.route('/edit-test/:editId', {
	name: 'editTest',
	action () {
		BlazeLayout.render('mainLayout', {main: 'editTest'});
	}
});

FlowRouter.route('/add-question/:testId', {
	name: 'addQuestion',
	action () {
		BlazeLayout.render('mainLayout', {main: 'addQuestion'});
	}
});