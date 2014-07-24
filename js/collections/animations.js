// Filename: animations.js
define(
	[
		'underscore',
		'backbone'
	],
	function(_, Backbone){
		var Animations = new Backbone.Collection([
			{
				id: 'Init', 
				from: 0,
				to: 900
			},
			{
				id: 'Logo1', 
				from: 900,
				to: 1800
			}
		]);
		return Animations;
	}
);