// Filename: main.js
'use strict';
require.config({
	baseUrl: '../',
	shim: {
		jqueryui: {
			deps: [
				'jquery'
			],
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		tween: {
			exports: 'Tween'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		two: {
			deps: [
				'underscore',
				'backbone'
			],
			exports: 'Two'
		}
	},
	paths: {
		views: 'js/views',
		models: 'js/models',
		collections: 'js/collections',
		assets: 'js/assets',
		templates: 'js/templates',
		tween: 'bower_components/tween.js/build/tween.min',
		jquery: 'bower_components/jquery/dist/jquery.min',
		underscore: 'bower_components/underscore/underscore',
		backbone: 'bower_components/backbone/backbone',
		two: 'bower_components/two/build/two.min',
		text: 'bower_components/text/text'
	}
});
require(['views/app'],
	function(App){
		console.log('╔╦╗╔═╗╦╔═╔═╗         \n║║║╠═╣╠╩╗║╣          \n╩ ╩╩ ╩╩ ╩╚═╝         \n╔╦╗╦ ╦  ╦  ╔═╗╔═╗╔═╗ \n║║║╚╦╝  ║  ║ ║║ ╦║ ║ \n╩ ╩ ╩   ╩═╝╚═╝╚═╝╚═╝ \n╔═╗╔╦╗╔═╗╦  ╦  ╔═╗╦═╗\n╚═╗║║║╠═╣║  ║  ║╣ ╠╦╝\n╚═╝╩ ╩╩ ╩╩═╝╩═╝╚═╝╩╚═\n.....................\n└─────> DEV BY PROPER CODE\n└─────> ♥ C.M. \n└─────> App started')
		window.app = new App();
	}
);


