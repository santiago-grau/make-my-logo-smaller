// Filename: bubbles.js
define(
	[
		'underscore',
		'backbone'
	],
	function(_, Backbone){
		var Bubbles = new Backbone.Collection([
			{
				user: 'designer',
				copy: 'Here\'s the proposal for your logo, hope you like it',
				pos: 0 
			},
			{
				user: 'client',
				copy: 'Hmmmmmmmmmm... you forgot to remove some weird lines under the logo...',
				pos: 200 
			},
			{
				user: 'designer',
				copy: 'Oh no, see. Those are there on purpose. It\'s an underline',
				pos: 400 
			},
			{
				user: 'client',
				copy: 'I don\'t get it, why would you want to underline a logo',
				pos: 600 
			},
			{
				user: 'designer',
				copy: 'It\'s just an aesthetic resource',
				pos: 800 
			},
			{
				user: 'client',
				copy: 'Well it\'s quite un-aesthetic, remove it please',
				pos: 900 
			},
			{
				user: 'designer',
				copy: 'Sure, how about now?',
				pos: 1800
			},
			{
				user: 'client',
				copy: 'Looks better but the font looks very antique, can you make it more modern?',
				pos: 2000 
			},
			{
				user: 'designer',
				copy: 'Like this?',
				pos: 2200
			}
		]);
		return Bubbles;
	}
);