import { PubSub } from '@google-cloud/pubsub';

// this type is named ClientConfig in pubsub, but isn't properly exported
type ClientConfig = PubSub['options'];

// Component registration function
export = function (app: { pubsub: PubSub }, options: ClientConfig) {
	app.pubsub = new PubSub(options);
};
