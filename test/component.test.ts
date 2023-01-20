import { assert } from 'chai';

import { app } from './server';

describe('loopback-component-pubsub', function () {
	beforeEach(function () {
		return;
	});

	afterEach(function () {
		return;
	});

	it('should create pubsub client', function () {
		assert.ok(app.pubsub);
	});

	it('should use component config', function () {
		assert.equal(app.pubsub.projectId, 'test');
	});
});
