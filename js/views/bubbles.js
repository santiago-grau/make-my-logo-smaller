// Filename: bubbles.js
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'collections/bubbles',
		'text!templates/bubble.tpl'
	],
	function($, _, Backbone, Collection, Template){
		var Bubbles = Backbone.View.extend({
			el: '#bubbles',
			collection: Collection,
			template: Template,
			initialize: function(data){
				_.extend(this, data);
				this.parent.model.bind('change:scroll', this.scroll, this)
				this.collection.each(_.bind(this.makeBubble, this));
				this.$el.height(this.collection.at(this.collection.length-1).get('pos') + 300);
			},
			makeBubble: function(element, index, list){
				this.$el.append(_.template(this.template, element.toJSON()));
				var bubble = this.$('.bubble').last();
				this.collection.at(index).set('el', bubble);
				bubble.css({top : this.collection.at(index).get('pos') + bubble.outerHeight()});
				if(this.parent.model.get('scroll') - bubble.outerHeight() > this.collection.at(index).get('pos') + 10){
					this.showBubble(this.collection.at(index))
				}
			},
			scroll: function(model){
				// var speed = model.get('scrollSpeed')/10;
				// var delta = Math.min(Math.abs(speed), 10);
				// var inc = delta * Math.abs(speed)/speed
				// this.$('.bubble.active').each(function(){
				// 	$(this).css({
				// 		'transform' : 'translateY('+inc+'px)',
				// 		'-ms-transform' : 'translateY('+inc+'px)',
				// 		'-moz-transform' : 'translateY('+inc+'px)',
				// 		'-webkit-transform' : 'translateY('+inc+'px)'
				// 	})
				// })
				var bubble = this.collection.at(model.get('currentBubble'));
				if(model.get('scroll') - bubble.get('el').outerHeight() > bubble.get('pos') + 10){
					if(!bubble.get('el').hasClass('active')) this.showBubble(bubble);
					if(model.get('currentBubble') < this.collection.length - 1) model.set('currentBubble', model.get('currentBubble') + 1);
				}
			},
			showBubble: function(bubble, model){
				console.log('          └─────> ' + bubble.get('user').charAt(0).toUpperCase() + bubble.get('user').slice(1) + ' says: ' + bubble.get('copy'));
				bubble.get('el').addClass('active').css({ top: bubble.get('pos') });
			}
		});
		return Bubbles;
	}
);