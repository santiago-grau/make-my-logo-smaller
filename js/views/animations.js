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
					this.parent.logo = this.parent.two.interpret(document.getElementById("logo1")).center();
					_.each(this.parent.logo.children, function(element, index, list){
						if(index.indexOf('ul') !== -1){
							element.oy = element.getBoundingClientRect().top;
							element.ox = element.getBoundingClientRect().left;
							element.ow = element.getBoundingClientRect().width;
							_.each(element.vertices, function(v) {
								v.ox = v.x;
								v.oy = v.y;
							});
						}
						if(index.indexOf('word') !== -1){
							element.ow = element.getBoundingClientRect().width;
							element.oh = element.getBoundingClientRect().height;
							element.oy = element.translation.y;
							element.ox = element.translation.x;
						}
					});
					this.parent.logo.fill = '#000'
					this.tween = new TWEEN.Tween( { x: 0} ).to( { x: 1 }, 3000 ).easing( TWEEN.Easing.Elastic.Out )
					.onUpdate( _.bind(this.update, this) ).start();
					this.parent.two.play();
					this.resize();
					this.animate();
				},
				update: function(scale){
					this.parent.logo.scale = scale;
				},
				resize: function(){
					var rect = this.parent.logo.getBoundingClientRect();
					this.parent.logo.translation.set(this.parent.two.width/2, this.parent.two.height/2);
				},
				animate: function(time){
					TWEEN.update(time||0);
					requestAnimationFrame( _.bind(this.animate,this) );
				},
				scroll: function(scroll){
					
				}
			}),
			Logo1: Backbone.View.extend({
				initialize: function(data){	
					_.extend(this, data);
					_.bindAll(this, 'scroll', 'endPosition');
					this.parent.two.play();
					this.resize();
					this.parent.logo.oh = this.parent.logo.getBoundingClientRect().height;
					var underWidth = 0;
					_.each(this.parent.logo.children, function(element, index, list){
						//console.log(element.getBoundingClientRect().width)
						if(index.indexOf('ul') !== -1){
							underWidth += element.getBoundingClientRect().width
						}
					});
					this.mult = underWidth/(this.model.get('to') - this.model.get('from'));
				},
				scroll: function(scroll){
					console.log(scroll)
					if(scroll*this.mult <= this.parent.logo.children.ul3.ow){
						// animate 3rd nderline
						var v3 = this.parent.logo.children.ul3.vertices[3];
						var v2 = this.parent.logo.children.ul3.vertices[2];
						v3.set(v3.ox - scroll*this.mult, v3.oy);
						v2.set(v2.ox - scroll*this.mult, v2.oy);
						// make sure underline 1 and 2 are shown
						this.parent.logo.children.ul2.vertices[3].set(this.parent.logo.children.ul2.vertices[3].ox, this.parent.logo.children.ul2.vertices[3].oy);
						this.parent.logo.children.ul2.vertices[2].set(this.parent.logo.children.ul2.vertices[2].ox, this.parent.logo.children.ul2.vertices[2].oy);
						this.parent.logo.children.ul1.vertices[3].set(this.parent.logo.children.ul1.vertices[3].ox, this.parent.logo.children.ul1.vertices[3].oy);
						this.parent.logo.children.ul1.vertices[2].set(this.parent.logo.children.ul1.vertices[2].ox, this.parent.logo.children.ul1.vertices[2].oy);
						// 1st word reset
						this.parent.logo.children.word1.translation.y = this.parent.logo.children.word1.oy;
					}else if(scroll*this.mult >= this.parent.logo.children.ul3.ow && scroll*this.mult <= this.parent.logo.children.ul2.ow + this.parent.logo.children.ul3.ow){
						// animate 2nd underline
						var v3 = this.parent.logo.children.ul2.vertices[3];
						var v2 = this.parent.logo.children.ul2.vertices[2];
						v3.set(v3.ox - ((scroll*this.mult) - this.parent.logo.children.ul3.ow), v3.oy);
						v2.set(v2.ox - ((scroll*this.mult) - this.parent.logo.children.ul3.ow), v2.oy);
						// make sure underline 1 is shown
						this.parent.logo.children.ul1.vertices[3].set(this.parent.logo.children.ul1.vertices[3].ox, this.parent.logo.children.ul1.vertices[3].oy);
						this.parent.logo.children.ul1.vertices[2].set(this.parent.logo.children.ul1.vertices[2].ox, this.parent.logo.children.ul1.vertices[2].oy);
						// make sure underline 3 is hidden
						this.parent.logo.children.ul3.vertices[3].set(this.parent.logo.children.ul3.vertices[0].x, this.parent.logo.children.ul3.vertices[3].oy);
						this.parent.logo.children.ul3.vertices[2].set(this.parent.logo.children.ul3.vertices[0].x, this.parent.logo.children.ul3.vertices[2].oy);
						// 3rd word reset
						this.parent.logo.children.word3.translation.y = this.parent.logo.children.word3.oy;
					}else if(scroll*this.mult >= this.parent.logo.children.ul3.ow + this.parent.logo.children.ul2.ow && scroll*this.mult <= this.parent.logo.children.ul1.ow + this.parent.logo.children.ul2.ow + this.parent.logo.children.ul3.ow){
						// animate 1st underline
						var v3 = this.parent.logo.children.ul1.vertices[3];
						var v2 = this.parent.logo.children.ul1.vertices[2];
						v3.set(v3.ox - ((scroll*this.mult) - this.parent.logo.children.ul3.ow - this.parent.logo.children.ul2.ow), v3.oy);
						v2.set(v2.ox - ((scroll*this.mult) - this.parent.logo.children.ul3.ow - this.parent.logo.children.ul2.ow), v2.oy);
						// make sure underline 2 and 3 are hidden
						this.parent.logo.children.ul3.vertices[3].set(this.parent.logo.children.ul3.vertices[0].x, this.parent.logo.children.ul3.vertices[3].oy);
						this.parent.logo.children.ul3.vertices[2].set(this.parent.logo.children.ul3.vertices[0].x, this.parent.logo.children.ul3.vertices[2].oy);
						this.parent.logo.children.ul2.vertices[3].set(this.parent.logo.children.ul2.vertices[0].x, this.parent.logo.children.ul2.vertices[3].oy);
						this.parent.logo.children.ul2.vertices[2].set(this.parent.logo.children.ul2.vertices[0].x, this.parent.logo.children.ul2.vertices[2].oy);
						// 1st word reset
						this.parent.logo.children.word1.translation.y = this.parent.logo.children.word1.oy;
						// 3rd word remove 30px
						this.parent.logo.children.word3.translation.y = this.parent.logo.children.word3.oy - Math.min(scroll*this.mult - this.parent.logo.children.ul3.ow, 30);
					}
				},
				resize: function(){
					var rect = this.parent.logo.getBoundingClientRect();
					this.parent.logo.translation.set(this.parent.two.width/2, this.parent.two.height/2);
					this.two.update();
				},
				endPosition: function(){
					// make sure underlines are hidden
					this.parent.logo.children.ul3.vertices[3].set(this.parent.logo.children.ul3.vertices[0].x, this.parent.logo.children.ul3.vertices[3].oy);
					this.parent.logo.children.ul3.vertices[2].set(this.parent.logo.children.ul3.vertices[0].x, this.parent.logo.children.ul3.vertices[2].oy);
					this.parent.logo.children.ul2.vertices[3].set(this.parent.logo.children.ul2.vertices[0].x, this.parent.logo.children.ul2.vertices[3].oy);
					this.parent.logo.children.ul2.vertices[2].set(this.parent.logo.children.ul2.vertices[0].x, this.parent.logo.children.ul2.vertices[2].oy);
					this.parent.logo.children.ul1.vertices[3].set(this.parent.logo.children.ul1.vertices[0].x, this.parent.logo.children.ul1.vertices[3].oy);
					this.parent.logo.children.ul1.vertices[2].set(this.parent.logo.children.ul1.vertices[0].x, this.parent.logo.children.ul1.vertices[2].oy);
					// 1st word add 30px
					this.parent.logo.children.word1.translation.y = this.parent.logo.children.word1.oy + 30;
					// 3rd word remove 30px
					this.parent.logo.children.word3.translation.y = this.parent.logo.children.word3.oy - 30;
				},
				initPosition: function(){
					// make sure underlines are hidden
					this.parent.logo.children.ul3.vertices[3].set(this.parent.logo.children.ul3.vertices[3].ox, this.parent.logo.children.ul3.vertices[3].oy);
					this.parent.logo.children.ul3.vertices[2].set(this.parent.logo.children.ul3.vertices[2].ox, this.parent.logo.children.ul3.vertices[2].oy);
					this.parent.logo.children.ul2.vertices[3].set(this.parent.logo.children.ul2.vertices[3].ox, this.parent.logo.children.ul2.vertices[3].oy);
					this.parent.logo.children.ul2.vertices[2].set(this.parent.logo.children.ul2.vertices[2].ox, this.parent.logo.children.ul2.vertices[2].oy);
					this.parent.logo.children.ul1.vertices[3].set(this.parent.logo.children.ul1.vertices[3].ox, this.parent.logo.children.ul1.vertices[3].oy);
					this.parent.logo.children.ul1.vertices[2].set(this.parent.logo.children.ul1.vertices[2].ox, this.parent.logo.children.ul1.vertices[2].oy);
					// 1st word reset
					this.parent.logo.children.word1.translation.y = this.parent.logo.children.word1.oy;
					// 3rd word reset
					this.parent.logo.children.word3.translation.y = this.parent.logo.children.word3.oy;
				}
			}),
			Logo2: Backbone.View.extend({
				initialize: function(data){
					_.extend(this, data);
					_.each(this.parent.logo.children, $.proxy(function(element, index, list){
						if(index.indexOf('word') !== -1){
							console.log(element.getBoundingClientRect())
							element.ow = element.getBoundingClientRect().width;
							element.oh = element.getBoundingClientRect().height;
							element.oy = element.getBoundingClientRect().top;
							element.ox = element.getBoundingClientRect().left;
							this.parent.rect = this.parent.two.makeRectangle(element.ox + element.ow/2 , element.oy + element.oh/2 , element.ow + 60, element.oh + 60);
						}
					},this));
					this.parent.logo.fill = '#000'
					this.parent.two.play();
					this.resize();
				},
				resize: function(){
					var rect = this.parent.logo.getBoundingClientRect();
					this.parent.logo.translation.set(this.parent.two.width/2, this.parent.two.height/2);
				},
				scroll: function(scroll){
					
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
				this.two = new Two({ type: Two.Types['opengl'], height: this.$el.height(), width: this.$el.width()}).appendTo(this.$el[0]);
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
			},
			makeAnimation: function(element, index, list){
				//console.log(this.collection)
				var animation = new animations[element.get('id')]({parent: this, model: element, two: this.two});
				this.collection.at(index).set('animation', animation);
			},
			scroll: function(model){
				var animation = this.collection.at(model.get('currentBubble'));
				var scroll = model.get('scroll');
				var active = this.collection.find(function(animation) {
					return (animation.get('from') <= scroll) && (animation.get('to') > scroll);
				});
				// if(this.animation && this.animation.end) this.animation.end();
				if(active) this.parent.model.set('animation', active.get('id'));
				else this.parent.model.set('animation', null);
				if(active) active.get('animation').scroll(scroll - active.get('from'));
			},
			resize: function(){
				//if(this.animation.resize) _.bind(this.animation.resize, this);
			}
		});
		return Animations;
	}
);