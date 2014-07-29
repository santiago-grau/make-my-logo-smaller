// Filename: animations.js
define(
	[
		'underscore',
		'backbone'
	],
	function(_, Backbone){
		var Animations = new Backbone.Collection([
			{
				id: 'Init', 
				from: 0,
				to: 900
			},
			{
				id: 'RemoveUnderline', 
				from: 900,
				to: 1800
			},
			{
				id: 'FontChange1', 
				from: 2200,
				to: 3000
			},
			{
				id: 'FontChange2', 
				from: 3200,
				to: 4000
			},
			{
				id: 'FontSwap1', 
				from: 5420,
				to: 5520
			},
			{
				id: 'FontSwap2', 
				from: 5620,
				to: 5720
			},
			{
				id: 'FontSwap3', 
				from: 5820,
				to: 5920
			},
			{
				id: 'FontSwap4', 
				from: 5920,
				to: 6020
			},
			{
				id: 'FontSwap5', 
				from: 6120,
				to: 6220
			},
			{
				id: 'FontSwap6', 
				from: 6320,
				to: 6420
			},
			{
				id: 'FontSwap7', 
				from: 6520,
				to: 6620
			},
			{
				id: 'FontSwap8', 
				from: 6720,
				to: 6820
			},
			{
				id: 'FontSwap9', 
				from: 6920,
				to: 7020
			},
			{
				id: 'FontSwap10', 
				from: 7120,
				to: 7220
			},
			{
				id: 'FontSwap11', 
				from: 7220,
				to: 7320
			},
			{
				id: 'FontSwap12', 
				from: 7420,
				to: 7520
			},
			{
				id: 'FontSwap13', 
				from: 7620,
				to: 7720
			},
			{
				id: 'FontSwap14', 
				from: 7820,
				to: 7920
			},
			{
				id: 'FontSwap15', 
				from: 8020,
				to: 8120
			},
			{
				id: 'FontSwap16', 
				from: 8220,
				to: 8320
			},
			{
				id: 'FontSwap17', 
				from: 8420,
				to: 8520
			},
			{
				id: 'FontSwap18', 
				from: 8620,
				to: 8720
			},
			{
				id: 'FontSwap19', 
				from: 8820,
				to: 8920
			},
			{
				id: 'FontSwap20', 
				from: 9020,
				to: 9120
			},
			{
				id: 'FontSwap21', 
				from: 9220,
				to: 9320
			},
			{
				id: 'FontSwap22', 
				from: 9420,
				to: 9520
			},
			{
				id: 'FontSwap23', 
				from: 9620,
				to: 9720
			},
			{
				id: 'FontSwap24', 
				from: 9820,
				to: 9920
			},
			{
				id: 'FontSwap25', 
				from: 10020,
				to: 10120
			},
			{
				id: 'FontSwap26', 
				from: 10220,
				to: 10320
			},
			{
				id: 'FontSwap27', 
				from: 10420,
				to: 10520
			},
			{
				id: 'FontSwap28', 
				from: 10620,
				to: 10720
			},
			{
				id: 'FontSwap29', 
				from: 10820,
				to: 10920
			},
			{
				id: 'FontSwap30', 
				from: 11020,
				to: 11120
			}
		]);
		return Animations;
	}
);