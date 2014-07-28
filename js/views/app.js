// Filename: app.js
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/bubbles',
		'views/animations',
		'models/appmodel'
	],
	function($, _, Backbone, Bubbles, Animations, AppModel){
		var App = Backbone.View.extend({
			el: window,
			model: new AppModel(),
			initialize: function(){
				this.$el.bind('scroll', _.bind(this.scroll, this));
				this.model.set('scroll', this.$el.scrollTop());
				this.bubbles = new Bubbles({parent:this});
				this.animations = new Animations({parent:this});
			},
			scroll: function(){
				this.model.set('scrollSpeed', this.$el.scrollTop() - this.model.get('scroll'));
				//console.log(this.model.get('scrollSpeed'))
				this.model.set('scroll', this.$el.scrollTop());
				this.model.set('scrolling', true);
				if(this.scrollTimer) clearTimeout($.data(this, 'scrollTimer'));
				$.data(this, 'scrollTimer', setTimeout($.proxy(function() {
					this.model.set('scrolling', false);
				},this), 150));
			}
		});
		return App;
	}
);