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
		var animations = {
			Init: Backbone.View.extend({
				initialize: function(data){
					_.extend(this, data);
					this.two = new Two({ type: Two.Types['canvas'], height: this.$el.height(), width: this.$el.width()}).appendTo(this.$el[0]);
					this.logo = this.two.interpret(document.getElementById("logo1")).center();
					this.logo.fill = '#000'
					this.logo.scale = 0;
					this.tween = new TWEEN.Tween( { x: 0} ).to( { x: 1 }, 3000 ).easing( TWEEN.Easing.Elastic.Out )
					.onUpdate( _.bind(this.update, this) ).start();
					this.two.play();
					this.resize();
					this.animate();
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
			}),
			Logo1: Backbone.View.extend({
				initialize: function(data){
					_.extend(this, data);
					this.two = new Two({ type: Two.Types['canvas'], height: this.$el.height(), width: this.$el.width()}).appendTo(this.$el[0]);
					this.el = this.two.renderer;
					this.logo = this.two.interpret(document.getElementById("logo1")).center();
					this.logo.fill = '#000'
					this.logo.scale = 0.5;
					var underWidth = 0;
					_.each(this.logo.children, function(element, index, list){
						if(index.indexOf('ul') !== -1){
							underWidth += element.getBoundingClientRect().width
						}
					});
					this.underWidth = underWidth;
				},
				scroll: function(e){
					console.log(e)
				}
			})
		}
		var Animations = Backbone.View.extend({
			el: '#animations',
			collection: Collection,
			initialize: function(data){
				_.extend(this, data);
				this.parent.model.bind('change:animation', this.setAnimation, this);
				this.parent.$el.bind('resize', _.bind(this.resize, this));
				this.parent.model.bind('change:scroll', this.scroll, this);
				this.collection.each(_.bind(this.makeAnimation, this));
				$('.ani').first().show()
			},
			makeAnimation: function(element, index, list){
				var animation = new animations[element.get('id')]({el: $('<div class="ani" />').appendTo(this.$el), parent: this, model: element});
				this.collection.at(index).set('el', $('.ani').last());
			},
			scroll: function(model){
				var animation = this.collection.at(model.get('currentBubble'));
				var scroll = model.get('scroll');
				var active = this.collection.find(function(animation) {
					return (animation.get('from') <= scroll) && (animation.get('to') > scroll);
				});
				if(active) this.parent.model.set('animation', active.get('id'));
				else this.parent.model.set('animation', null);
				if(this.animation && this.animation.scroll) this.animation.scroll(scroll);
			},
			resize: function(){
				this.collection.each(_.bind(this.resizeAnimation, this));
			}
		});
		return Animations;
	}
);