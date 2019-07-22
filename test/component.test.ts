const should = require('chai').should();
import {app} from './server';

describe('loopback-component-pubsub', function() {
	beforeEach(function() {});

	afterEach(function() {});

	it('should create pubsub client', function() {
		should.exist(app.pubsub);
	});

	it('should use component config', function() {
		app.pubsub.projectId.should.equal('test');
	});
});
