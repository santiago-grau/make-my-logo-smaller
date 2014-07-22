// Filename: app.js
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'two',
		'views/bubbles'
	],
	function($, _, Backbone, Two, Bubbles){
		var App = Backbone.View.extend({
			el: 'body',
			initialize: function(){
				this.bubbles = new Bubbles();
				this.two = new Two({ type: Two.Types['opengl'], height: $(window).height(), width: $(window).width()}).appendTo($('#logo')[0]);
				this.logo = this.two.interpret(document.getElementById("logo1")).center();
				this.logo.fill = '#000';
				this.resize();
				this.two.update();
			},
			resize: function(){
				var rect = this.logo.getBoundingClientRect();
				this.logo.translation.set(this.two.width/2, this.two.height/2);
			}
		});
		return App;
	}
);