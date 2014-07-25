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
					this.two = new Two({ type: Two.Types['opengl'], height: this.$el.height(), width: this.$el.width()}).appendTo(this.$el[0]);
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
				},
				scroll: function(scroll){
					
				}
			}),
			Logo1: Backbone.View.extend({
				initialize: function(data){
					_.extend(this, data);
					_.bindAll(this, 'scroll');
					this.two = new Two({ type: Two.Types['canvas'], height: this.$el.height(), width: this.$el.width()}).appendTo(this.$el[0]);
					this.el = this.two.renderer;
					this.logo = this.two.interpret(document.getElementById("logo1")).center();
					this.logo.fill = '#000'
					this.two.play();
					this.resize();
					this.logo.oh = this.logo.getBoundingClientRect().height;
					var underWidth = 0;
					_.each(this.logo.children, function(element, index, list){
						if(index.indexOf('ul') !== -1){
							element.oy = element.getBoundingClientRect().top;
							element.ox = element.getBoundingClientRect().left;
							element.ow = element.getBoundingClientRect().width;
							underWidth += element.getBoundingClientRect().width
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
					this.mult = underWidth/(this.model.get('to') - 100 - this.model.get('from'));
				},
				scroll: function(scroll){
					if(scroll*this.mult <= this.logo.children.ul3.ow){
						// animate 3rd nderline
						var v3 = this.logo.children.ul3.vertices[3];
						var v2 = this.logo.children.ul3.vertices[2];
						v3.set(v3.ox - scroll*this.mult, v3.oy);
						v2.set(v2.ox - scroll*this.mult, v2.oy);
						// make sure underline 1 and 2 are shown
						this.logo.children.ul2.vertices[3].set(this.logo.children.ul2.vertices[3].ox, this.logo.children.ul2.vertices[3].oy);
						this.logo.children.ul2.vertices[2].set(this.logo.children.ul2.vertices[2].ox, this.logo.children.ul2.vertices[2].oy);
						this.logo.children.ul1.vertices[3].set(this.logo.children.ul1.vertices[3].ox, this.logo.children.ul1.vertices[3].oy);
						this.logo.children.ul1.vertices[2].set(this.logo.children.ul1.vertices[2].ox, this.logo.children.ul1.vertices[2].oy);
					}else if(scroll*this.mult >= this.logo.children.ul3.ow && scroll*this.mult <= this.logo.children.ul2.ow + this.logo.children.ul3.ow){
						// animate 2nd underline
						var v3 = this.logo.children.ul2.vertices[3];
						var v2 = this.logo.children.ul2.vertices[2];
						v3.set(v3.ox - ((scroll*this.mult) - this.logo.children.ul3.ow), v3.oy);
						v2.set(v2.ox - ((scroll*this.mult) - this.logo.children.ul3.ow), v2.oy);
						// make sure underline 1 is shown
						this.logo.children.ul1.vertices[3].set(this.logo.children.ul1.vertices[3].ox, this.logo.children.ul1.vertices[3].oy);
						this.logo.children.ul1.vertices[2].set(this.logo.children.ul1.vertices[2].ox, this.logo.children.ul1.vertices[2].oy);
						// make sure underline 3 is hidden
						this.logo.children.ul3.vertices[3].set(this.logo.children.ul3.vertices[0].x, this.logo.children.ul3.vertices[3].oy);
						this.logo.children.ul3.vertices[2].set(this.logo.children.ul3.vertices[0].x, this.logo.children.ul3.vertices[2].oy);
						// 3rd word reset
						this.logo.children.word3.translation.y = this.logo.children.word3.oy;
					}else if(scroll*this.mult >= this.logo.children.ul3.ow + this.logo.children.ul2.ow && scroll*this.mult <= this.logo.children.ul1.ow + this.logo.children.ul2.ow + this.logo.children.ul3.ow){
						// animate 1st underline
						var v3 = this.logo.children.ul1.vertices[3];
						var v2 = this.logo.children.ul1.vertices[2];
						v3.set(v3.ox - ((scroll*this.mult) - this.logo.children.ul3.ow - this.logo.children.ul2.ow), v3.oy);
						v2.set(v2.ox - ((scroll*this.mult) - this.logo.children.ul3.ow - this.logo.children.ul2.ow), v2.oy);
						// make sure underline 2 and 3 are hidden
						this.logo.children.ul3.vertices[3].set(this.logo.children.ul3.vertices[0].x, this.logo.children.ul3.vertices[3].oy);
						this.logo.children.ul3.vertices[2].set(this.logo.children.ul3.vertices[0].x, this.logo.children.ul3.vertices[2].oy);
						this.logo.children.ul2.vertices[3].set(this.logo.children.ul2.vertices[0].x, this.logo.children.ul2.vertices[3].oy);
						this.logo.children.ul2.vertices[2].set(this.logo.children.ul2.vertices[0].x, this.logo.children.ul2.vertices[2].oy);
						// 1st word reset
						this.logo.children.word1.translation.y = this.logo.children.word1.oy;
						// 3rd word remove 30px
						this.logo.children.word3.translation.y = this.logo.children.word3.oy - Math.min(scroll*this.mult - this.logo.children.ul3.ow, 30);
					}else{
						// make sure underlines are hidden
						this.logo.children.ul3.vertices[3].set(this.logo.children.ul3.vertices[0].x, this.logo.children.ul3.vertices[3].oy);
						this.logo.children.ul3.vertices[2].set(this.logo.children.ul3.vertices[0].x, this.logo.children.ul3.vertices[2].oy);
						this.logo.children.ul2.vertices[3].set(this.logo.children.ul2.vertices[0].x, this.logo.children.ul2.vertices[3].oy);
						this.logo.children.ul2.vertices[2].set(this.logo.children.ul2.vertices[0].x, this.logo.children.ul2.vertices[2].oy);
						this.logo.children.ul1.vertices[3].set(this.logo.children.ul1.vertices[0].x, this.logo.children.ul1.vertices[3].oy);
						this.logo.children.ul1.vertices[2].set(this.logo.children.ul1.vertices[0].x, this.logo.children.ul1.vertices[2].oy);
						// 1st word add 30px
						this.logo.children.word1.translation.y = this.logo.children.word1.oy + Math.min(scroll*this.mult - (this.logo.children.ul3.ow - this.logo.children.ul2.ow), 30);
					}
				},
				resize: function(){
					var rect = this.logo.getBoundingClientRect();
					this.logo.translation.set(this.two.width/2, this.two.height/2);
					this.two.update();
				},
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
				$('.ani').first().addClass('active');
			},
			setAnimation: function(model){
				if(model){
					var active = this.collection.find(function(animation) {
						return animation.get('id') == model.get('animation');
					});
				}
				this.$('.ani.active').removeClass('active');
				if(active) active.get('el').addClass('active');
			},
			makeAnimation: function(element, index, list){
				var animation = new animations[element.get('id')]({el: $('<div class="ani" />').appendTo(this.$el), parent: this, model: element});
				this.collection.at(index).set('el', $('.ani').last());
				this.collection.at(index).set('animation', animation);
			},
			scroll: function(model){
				var animation = this.collection.at(model.get('currentBubble'));
				var scroll = model.get('scroll');
				var active = this.collection.find(function(animation) {
					return (animation.get('from') <= scroll) && (animation.get('to') > scroll);
				});
				if(active) this.parent.model.set('animation', active.get('id'));
				else this.parent.model.set('animation', null);
				
				if(active) active.get('animation').scroll(scroll - active.get('from'));
			},
			resize: function(){
				this.collection.each(_.bind(this.resizeAnimation, this));
			}
		});
		return Animations;
	}
);