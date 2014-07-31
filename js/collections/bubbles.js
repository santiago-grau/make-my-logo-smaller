// Filename: bubbles.js
define(
	[
		'underscore',
		'backbone'
	],
	function(_, Backbone){
		var Bubbles = new Backbone.Collection([
			{	pos: 0,		user: 'designer',		copy: 'Here\'s the proposal for your logo, hope you like it' },
			{	pos: 200,		user: 'client',		copy: 'Hmmmmmmmmmm... you forgot to remove some weird lines under the logo...' },
			{	pos: 400,		user: 'designer',	copy: 'Oh no, see. Those are there on purpose. It\'s an underline' },
			{	pos: 600,		user: 'client',		copy: 'I don\'t get it, why would you want to underline a logo' },
			{	pos: 740,		user: 'designer',	copy: 'It\'s just an aesthetic resource' },
			{	pos: 820,		user: 'client',		copy: 'Well it\'s quite un-aesthetic, remove it please' },
			{	pos: 1770,		user: 'designer',	copy: 'Sure, better like this?' },
			{	pos: 1800,		user: 'client',		copy: 'Looks better but the font looks very antique, can you make it more modern?' },
			{	pos: 2900,		user: 'designer',	copy: 'Something like this?' },
			{	pos: 3100,		user: 'client',		copy: 'No, I mean more... like classic-modern' },
			{	pos: 3900,		user: 'designer',	copy: 'OK, what about this?' },
			{	pos: 4100,		user: 'client',		copy: 'Hmmmmm...' },
			{	pos: 4150,		user: 'client',		copy: 'Hmmmmmmmmmmmmm...' },
			{	pos: 4200,		user: 'client',		copy: 'Hmmmmmmmmmmmmm... I don\'t think you are getting it' },
			{	pos: 4270,		user: 'client',		copy: 'Can you send me a test with each font on your system?' },
			{	pos: 4500,		user: 'designer',	copy: 'But...', },
			{	pos: 4600,		user: 'designer',	copy: 'I have more than 2000 installed fonts on my machine!' },
			{	pos: 4700,		user: 'client',		copy: 'Well, do you want to get paid for this logo?' },
			{	pos: 4800,		user: 'designer',	copy: 'Yes but...' },
			{	pos: 4850,		user: 'client',		copy: 'Then do your job...' },
			{	pos: 4900,		user: 'designer',	copy: 'Ok, I\'ll send over some tests...' },
			{	pos: 5300,		user: 'client',		copy: 'Don\t like it, keep trying' },
			{	pos: 5405,		user: 'client',		copy: 'Definitely no' },
			{	pos: 5505,		user: 'client',		copy: 'Nope!' },
			{	pos: 5606,		user: 'client',		copy: 'Are you kidding me?' },
			{	pos: 5705,		user: 'client',		copy: 'Hmmmmmm' },
			{	pos: 5805,		user: 'client',		copy: 'Hmmmmmmmmmm' },
			{	pos: 5905,		user: 'client',		copy: 'Could be! keep it for later...' },
			{	pos: 6005,		user: 'client',		copy: 'Too boring' },
			{	pos: 6105,		user: 'client',		copy: 'Too cute' },
			{	pos: 6205,		user: 'client',		copy: 'Too weird' },
			{	pos: 6305,		user: 'client',		copy: 'No, no, no!!' },
			{	pos: 6405,		user: 'client',		copy: 'Wow, save this one, my wife loves it!' },
			{	pos: 6505,		user: 'client',		copy: 'Nah!' },
			{	pos: 6605,		user: 'client',		copy: 'I\'m not Willy Wonka' },
			{	pos: 6705,		user: 'client',		copy: 'Too typewritter...(ish)' },
			{	pos: 6805,		user: 'client',		copy: 'Horrible' },
			{	pos: 6905,		user: 'client',		copy: 'Even worst' },
			{	pos: 7005,		user: 'client',		copy: 'No' },
			{	pos: 7105,		user: 'client',		copy: 'Looks like a restaurant logo...' },
			{	pos: 7205,		user: 'client',		copy: 'Nope...' }
		]);
		return Bubbles;
	}
);