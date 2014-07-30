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
				copy: 'Sure, better like this?',
				pos: 1800
			},
			{
				user: 'client',
				copy: 'Looks better but the font looks very antique, can you make it more modern?',
				pos: 2000 
			},
			{
				user: 'designer',
				copy: 'Something like this?',
				pos: 2900
			},
			{
				user: 'client',
				copy: 'No, I mean more... like classic-modern',
				pos: 3300
			},
			{
				user: 'designer',
				copy: 'OK, what about this?',
				pos: 3900
			},
			{
				user: 'client',
				copy: 'Hmmmmm...',
				pos: 4100
			},
			{
				user: 'client',
				copy: 'Hmmmmmmmmmmmmm...',
				pos: 4150
			},
			{
				user: 'client',
				copy: 'Hmmmmmmmmmmmmm... I don\'t think you are getting it',
				pos: 4200
			},
			{
				user: 'client',
				copy: 'Can you send me a test with each font on your system?',
				pos: 4300
			},
			{
				user: 'designer',
				copy: 'But...',
				pos: 4500
			},
			{
				user: 'designer',
				copy: 'I have more than 2000 installed fonts on my machine!',
				pos: 4600
			},
			{
				user: 'client',
				copy: 'Well, do you want to get paid for this logo?',
				pos: 4800
			},
			{
				user: 'designer',
				copy: 'Yes but...',
				pos: 5000
			},
			{
				user: 'client',
				copy: 'Then do your job...',
				pos: 5200
			},
			{
				user: 'designer',
				copy: 'Ok, here are some tests:',
				pos: 5400
			},
			{
				user: 'client',
				copy: 'Nope!',
				pos: 5500
			},
			{
				user: 'client',
				copy: 'Definitely no',
				pos: 5690
			},
			{
				user: 'client',
				copy: 'Nah...',
				pos: 5880
			},
			{
				user: 'client',
				copy: 'Nah...1',
				pos: 6100
			},
			{
				user: 'client',
				copy: 'Nah...2',
				pos: 6200
			},
			{
				user: 'client',
				copy: 'Nah...3',
				pos: 6300
			},
			{
				user: 'client',
				copy: 'Nah...4',
				pos: 6400
			},
			{
				user: 'client',
				copy: 'Nah...5',
				pos: 6500
			},
			{
				user: 'client',
				copy: 'Nah...6',
				pos: 6600
			},
			{
				user: 'client',
				copy: 'Nah...7',
				pos: 6700
			},
			{
				user: 'client',
				copy: 'Nah...8',
				pos: 6800
			},
			{
				user: 'client',
				copy: 'Nah...9',
				pos: 6900
			},
			{
				user: 'client',
				copy: 'Nah...10',
				pos: 7000
			},
			{
				user: 'client',
				copy: 'Nah...11',
				pos: 7100
			},
			{
				user: 'client',
				copy: 'Nah...12',
				pos: 7200
			},
			{
				user: 'client',
				copy: 'Nah...13',
				pos: 7300
			},
			{
				user: 'client',
				copy: 'Nah...14',
				pos: 7400
			},
			{
				user: 'client',
				copy: 'Nah...15',
				pos: 7500
			},
			{
				user: 'client',
				copy: 'Nah...16',
				pos: 7600
			},
			{
				user: 'client',
				copy: 'Nah...17',
				pos: 20700
			}
		]);
		return Bubbles;
	}
);