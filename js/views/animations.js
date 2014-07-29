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
					this.parent.$('#inner_logo').html('<u>' + this.string + '</u>');
				},
				scroll: function(){
					this.parent.$('#inner_logo').html('<u>' + this.string + '</u>');
				}
			}),
			RemoveUnderline: Backbone.View.extend({
				initialize: function(data){	
					_.extend(this, data);
					_.bindAll(this, 'scroll');
					this.mult = this.string.length/(this.model.get('to') - this.model.get('from'));
				},
				scroll: function(scroll){
					var index = Math.floor(scroll * this.mult);
					this.parent.$('#inner_logo').html('<u>' + this.string.substring(0, this.string.length - index) + '</u>' + this.string.substring(this.string.length - index, this.string.length));
				},
				endPosition: function(){
					this.parent.$('#inner_logo').html(this.string);
				}
			}),
			FontChange1: Backbone.View.extend({
				initialize: function(data){
					_.extend(this, data);
					_.bindAll(this, 'scroll');
					this.mult = this.string.length/(this.model.get('to') - this.model.get('from') - 100);
				},
				scroll: function(scroll){
					var index = Math.floor(scroll * this.mult);
					this.parent.$('#inner_logo').html('<b>' + this.string.substring(0, index) + '</b>' + this.string.substring(index, this.string.length) );
				},
				endPosition: function(){
					this.parent.$('#inner_logo').html(this.string );
					this.parent.$el.children('span').addClass('swap');

				}
			})
		}
		var Animations = Backbone.View.extend({
			el: '#logo',
			collection: Collection,
			initialize: function(data){
				_.extend(this, data);
				this.parent.model.bind('change:animation', this.setAnimation, this);
				// this.parent.$el.bind('resize', _.bind(this.resize, this));
				this.parent.model.bind('change:scroll', this.scroll, this);
				// this.two = new Two({ type: Two.Types['opengl'], height: this.$el.height(), width: this.$el.width()}).appendTo(this.$el[0]);
				this.collection.each(_.bind(this.makeAnimation, this));
			},
			setAnimation: function(model){
				if (this.parent.model.get('scrollSpeed') >= 0){
					if(this.animation && this.animation.endPosition) this.animation.endPosition();
				} else {
					if(this.animation && this.animation.initPosition) this.animation.initPosition();
				}
				if(model){
					var active = this.collection.find(function(animation) {
						return animation.get('id') == model.get('animation');
					});
				}
				if(active) this.animation = active.get('animation');
				else this.animation = null;
				if(active) this.$el.children('span').attr('class', active.get('id'))
			},
			makeAnimation: function(element, index, list){
				//console.log(this.collection)
				var animation = new animations[element.get('id')]({parent: this, model: element, string: this.parent.model.get('string')});
				this.collection.at(index).set('animation', animation);
			},
			scroll: function(model){
				var scroll = model.get('scroll');
				var active = this.collection.find(function(animation) {
					return (animation.get('from') <= scroll) && (animation.get('to') > scroll);
				});
				if(active) this.parent.model.set('animation', active.get('id'));
				else this.parent.model.set('animation', null);
				if(active && active.get('animation').scroll) active.get('animation').scroll(scroll - active.get('from'));
			},
			resize: function(){
				//if(this.animation.resize) _.bind(this.animation.resize, this);
			}
		});
		return Animations;
	}
);