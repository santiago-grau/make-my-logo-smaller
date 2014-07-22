// var resize = function(){
// 	var rect = logo.getBoundingClientRect();
// 	console.log(two)
// 	logo.translation.set(two.width/2, two.height/2);
// }
// var two = new Two({ type: Two.Types['opengl'], height: $(window).height(), width: $(window).width()}).appendTo($('#logo')[0]);
// var logo = two.interpret(document.getElementById("logo1")).center();
// logo.fill = '#000';
// resize();
// two.update();

// var addBubble = function(bubble){
// 	console.log(bubble)
// }
// _.each(conversation, addBubble);

// // $('#scroller').height($(window).height() + 1000)


// $(window).bind('scroll', function(e){
// 	console.log($(window).scrollTop())
// })




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
		collections: 'js/collections',
		assets: 'js/assets',
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
		window.app = new App();
	}
);