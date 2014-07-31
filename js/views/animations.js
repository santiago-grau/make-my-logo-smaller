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
		var FontChange = Backbone.View.extend({
			initialize: function(data){
				_.extend(this, data);
				_.bindAll(this, 'scroll');
				this.mult = this.string.length/(this.model.get('to') - this.model.get('from') - 10);
			},
			scroll: function(scroll){
				var index = Math.floor(scroll * this.mult);
				this.parent.$('#inner_logo').html('<span id="selected" >' + this.string.substring(0, index) + '</span>' + this.string.substring(index, this.string.length) );
				this.selectText('selected');
			},
			initPosition: function(){
				this.parent.$('#inner_logo').html(this.string );
				this.parent.$el.children('span').removeClass('swap');
			},
			endPosition: function(){
				this.parent.$('#inner_logo').html(this.string );
				this.parent.$el.children('span').addClass('swap');
			},
			selectText: function(element){
				var doc = document;
				var text = doc.getElementById(element);
				var range;
				var selection;
				if (doc.body.createTextRange) {
					range = document.body.createTextRange();
					range.moveToElementText(text);
					range.select();
				} else if (window.getSelection) {
					selection = window.getSelection();
					range = document.createRange();
					range.selectNodeContents(text);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			}
		});
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
					this.parent.$el.children('span').addClass('swap');
				}
			}),
			FontChange1: FontChange.extend(),
			FontChange2: FontChange.extend(),
			FontSwap1: FontChange.extend(),
			FontSwap2: FontChange.extend(),
			FontSwap3: FontChange.extend(),
			FontSwap4: FontChange.extend(),
			FontSwap5: FontChange.extend(),
			FontSwap6: FontChange.extend(),
			FontSwap7: FontChange.extend(),
			FontSwap8: FontChange.extend(),
			FontSwap9: FontChange.extend(),
			FontSwap10: FontChange.extend(),
			FontSwap11: FontChange.extend(),
			FontSwap12: FontChange.extend(),
			FontSwap13: FontChange.extend(),
			FontSwap14: FontChange.extend(),
			FontSwap15: FontChange.extend(),
			FontSwap16: FontChange.extend(),
			FontSwap17: FontChange.extend(),
			FontSwap18: FontChange.extend(),
			FontSwap19: FontChange.extend(),
			FontSwap20: FontChange.extend(),
			FontSwap21: FontChange.extend(),
			FontSwap22: FontChange.extend(),
			FontSwap23: FontChange.extend(),
			FontSwap24: FontChange.extend(),
			FontSwap25: FontChange.extend(),
			FontSwap26: FontChange.extend(),
			FontSwap27: FontChange.extend(),
			FontSwap28: FontChange.extend(),
			FontSwap29: FontChange.extend(),
			FontSwap30: FontChange.extend(),
			FontSwap31: FontChange.extend(),
			FontSwap32: FontChange.extend(),
			FontSwap33: FontChange.extend(),
			FontSwap34: FontChange.extend(),
			FontSwap35: FontChange.extend(),
			FontSwap36: FontChange.extend(),
			FontSwap37: FontChange.extend(),
			FontSwap38: FontChange.extend(),
			FontSwap39: FontChange.extend(),
			FontSwap40: FontChange.extend(),
			FontSwap41: FontChange.extend(),
			FontSwap42: FontChange.extend(),
			FontSwap43: FontChange.extend(),
			FontSwap44: FontChange.extend(),
			FontSwap45: FontChange.extend(),
			FontSwap46: FontChange.extend(),
			FontSwap47: FontChange.extend(),
			FontSwap48: FontChange.extend(),
			FontSwap49: FontChange.extend(),
			FontSwap50: FontChange.extend()
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
					console.log('          └─────> End animation: ' + model.get('animation') + ' [scrollTop -> '+ this.parent.$el.scrollTop() +']');
					if(this.animation && this.animation.endPosition) this.animation.endPosition();
				} else {
					console.log('          └─────> Start animation: ' + model.get('animation') + ' [scrollTop -> '+ this.parent.$el.scrollTop() +']');
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