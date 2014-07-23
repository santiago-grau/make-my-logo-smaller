// Filename: app.js
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'two',
		'views/bubbles',
		'models/appmodel'
	],
	function($, _, Backbone, Two, Bubbles, AppModel){
		var App = Backbone.View.extend({
			el: window,
			model: new AppModel(),
			initialize: function(){
				this.$el.bind('scroll', _.bind(this.scroll, this));
				this.model.set('scroll', this.$el.scrollTop());
				this.bubbles = new Bubbles({parent:this});
				this.two = new Two({ type: Two.Types['opengl'], height: $(window).height(), width: $(window).width()}).appendTo($('#logo')[0]);
				this.logo = this.two.interpret(document.getElementById("logo1")).center();
				this.logo.fill = '#000';
				this.resize();
				this.two.update();
			},
			scroll: function(){
				this.model.set('scrollSpeed', this.$el.scrollTop() - this.model.get('scroll'));
				this.model.set('scroll', this.$el.scrollTop());
				this.model.set('scrolling', true);
				if(this.scrollTimer) clearTimeout($.data(this, 'scrollTimer'));
				$.data(this, 'scrollTimer', setTimeout($.proxy(function() {
					this.model.set('scrolling', false);
				},this), 150));
			},
			resize: function(){
				var rect = this.logo.getBoundingClientRect();
				this.logo.translation.set(this.two.width/2, this.two.height/2);
			}
		});
		return App;
	}
);