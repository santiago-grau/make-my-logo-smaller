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
				id: 'RemoveUnderline', 
				from: 900,
				to: 1800
			},
			{
				id: 'FontChange1', 
				from: 2200,
				to: 3000
			}
			// },
			// {
			// 	id: 'Logo1', 
			// 	from: 900,
			// 	to: 1800
			// },
			// {
			// 	id: 'Logo2', 
			// 	from: 2000,
			// 	to: 3000
			// }
		]);
		return Animations;
	}
);