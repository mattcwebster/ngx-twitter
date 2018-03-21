import { Injectable } from '@angular/core';

@Injectable()
export class TwttrService {
	private TWITTER_SCRIPT_ID = 'twitter-wjs';
	private TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';
	constructor() {}

	loadScript() {
		window['twttr'] = (function(d, s, id, url) {
			let script,
				firstScriptEl = d.getElementsByTagName(s)[0],
				twitterScript = window['twttr'] || {};
			if (d.getElementById(id)) {
				return twitterScript;
			}

			script = d.createElement(s);
			script.id = id;
			script.src = url;
			firstScriptEl.parentNode.insertBefore(script, firstScriptEl);

			twitterScript._e = [];

			twitterScript.ready = function(f) {
				twitterScript._e.push(f);
			};

			return twitterScript;
		})(document, 'script', this.TWITTER_SCRIPT_ID, this.TWITTER_WIDGET_URL);
	}
}
