import {PubSub} from '@google-cloud/pubsub';
import {GoogleAuth} from 'google-auth-library';

// this type is named ClientConfig in pubsub, but isn't properly exported
type ClientConfig = PubSub['options'];

// Component registration function
export = function(app: {pubsub: PubSub}, options: ClientConfig) {
	const isProduction = !process.env.PUBSUB_EMULATOR_HOST;
	if (isProduction && !options.auth) {
		options.auth = new GoogleAuth();
	}
	app.pubsub = new PubSub(options);
}
