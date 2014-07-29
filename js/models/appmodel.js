// Filename: appmodel.js
define(
	[
		'underscore',
		'backbone'
	],
	function(_, Backbone){
		var AppModel = Backbone.Model.extend({
			defaults: {
				scroll: 0,
				scrolling: false,
				scrollSpeed: 0,
				currentBubble: 0,
				animation: 'Init',
				prevAnimation: null,
				string: "Make my logo smaller"
			}
		});
		return AppModel;
	}
);