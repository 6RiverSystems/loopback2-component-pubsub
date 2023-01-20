import { should } from 'chai';

import { app } from './server';

describe('loopback-component-pubsub', function () {
	beforeEach(function () {
		return;
	});

	afterEach(function () {
		return;
	});

	it('should create pubsub client', function () {
		should.exist(app.pubsub);
	});

	it('should use component config', function () {
		app.pubsub.projectId.should.equal('test');
	});
});
