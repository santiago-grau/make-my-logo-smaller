// Filename: bubbles.js
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'collections/bubbles'
	],
	function($, _, Backbone, Collection){
		var Bubbles = Backbone.View.extend({
			el: '#bubbles',
			collection: Collection,
			initialize: function(){
				console.log(this.collection.get(0))
			}
		});
		return Bubbles;
	}
);