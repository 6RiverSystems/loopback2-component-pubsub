import {PubSub} from '@google-cloud/pubsub';
import {ClientConfig} from '@google-cloud/pubsub/build/src/pubsub';
import {GoogleAuth} from 'google-auth-library';

// Component registration function
export = function(app: {pubsub: PubSub}, options: ClientConfig) {
	// NOTE: could try to check options.projectId too, but that's more complex
	const isProduction = !process.env.NODE_ENV || process.env.NODE_ENV === 'production';
	if (isProduction && !options.auth) {
		options.auth = new GoogleAuth();
	}
	app.pubsub = new PubSub(options);
}
