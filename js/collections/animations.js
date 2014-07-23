// Filename: animations.js
define(
	[
		'underscore',
		'backbone'
	],
	function(_, Backbone){
		var Animations = new Backbone.Collection([
			{
				id: 'Logo1', 
				from: 900,
				to: 1800
			},
			{
				id: 'logo2', 
				from: 2000,
				to: 2600
			}
		]);
		return Animations;
	}
);