import {PubSub} from '@google-cloud/pubsub';
import {ClientConfig} from '@google-cloud/pubsub/build/src/pubsub';
import {GoogleAuth} from 'google-auth-library';

// Component registration function
export = function(app: {pubsub: PubSub}, options: ClientConfig) {
	if (!options.auth) {
		options.auth = new GoogleAuth();
	}
	app.pubsub = new PubSub(options);
}
