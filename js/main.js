var animations = [
	{
		id: 'logo1',
		start: 0,
		end: 1000
	}
];
var two = new Two({ type: Two.Types['opengl'] }).appendTo($('#logo')[0]);

$(window).bind('scroll', function(e){
	console.log($(window).scrollTop())
})