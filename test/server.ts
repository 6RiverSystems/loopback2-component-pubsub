// eslint-disable-next-line @typescript-eslint/no-var-requires
const loopback = require('loopback');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const boot = require('loopback-boot');

export const app = loopback();

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err: Error) {
	if (err) {
		throw err;
	}
});

app.start = (done: () => void) => {
	const listener = app.listen(() => {
		app.stop = function (cb: any) {
			listener.close(cb);
		};
		done();
	});
};

before((done) => {
	app.start(done);
});

after((done) => {
	app.stop(done);
});
