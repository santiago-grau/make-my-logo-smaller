// Filename: animations.js
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'two',
		'tween',
		'collections/animations'
	],
	function($, _, Backbone, Two, Tween, Collection){
		var Ani = Backbone.View.extend({
			initialize: function(data){
				_.extend(this, data);
				this.logo = this.two.interpret(document.getElementById("logo1")).center();
				this.logo.fill = '#000'
				this.logo.scale = 0.5;
				this.tween = new TWEEN.Tween( { x: 0} ).to( { x: 1 }, 1200 ).easing( TWEEN.Easing.Elastic.Out )
				.onUpdate( _.bind(this.update, this) ).start();
				this.two.play();
				this.tween.stop;
				this.animate();
				return this;
			},
			update: function(scale){
				this.logo.scale = scale;
			},
			resize: function(){
				var rect = this.logo.getBoundingClientRect();
				this.logo.translation.set(this.two.width/2, this.two.height/2);
				this.two.update();
			},
			animate: function(time){
				TWEEN.update(time||0);
				requestAnimationFrame( _.bind(this.animate,this) );
			}
		});
		var Logo1 = Backbone.View.extend({
			initialize: function(){

			}
		});
		var AnimationsModel = Backbone.Model.extend({
			defaults: {
				animation: null
			}
		});
		var Animations = Backbone.View.extend({
			el: '#animations',
			collection: Collection,
			model: new AnimationsModel(),
			initialize: function(data){
				_.extend(this, data);
				this.model.bind('change:animation', this.setAnimation, this);
				this.parent.$el.bind('resize', _.bind(this.resize, this));
				this.parent.model.bind('change:scroll', this.scroll, this);
				this.two = new Two({ type: Two.Types['opengl'], height: this.$el.height(), width: this.$el.width()}).appendTo($('#animations')[0]);
				this.renderer = this.two.renderer.domElement;
				this.animation = new Ani({two: this.two});
				this.resize();
				this.two.update();
			},
			setAnimation: function(model){
				this.animationName = model.get('animation');
				console.log(eval(this['animationName']))
				this.animation = new eval(this['animationName'])();
			},
			scroll: function(model){
				var animation = this.collection.at(model.get('currentBubble'));
				var scroll = model.get('scroll');
				var active = this.collection.find(function(animation) {
					return (animation.get('from') <= scroll) && (animation.get('to') > scroll);
				});
				if(active) this.model.set('animation', active.get('id'));
				else this.model.set(null);
			},
			resize: function(){
				$(this.renderer).attr({
					width: this.$el.width(),
					height: this.$el.height()
				})
				this.two.width = this.$el.width();
				this.two.height = this.$el.height();
				this.animation.resize();
			}
		});
		return Animations;
	}
);