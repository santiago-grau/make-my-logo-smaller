var conversation = [
	{
		user: 'designer',
		copy: 'Here\'s the proposal for your logo, hope you like it',
		pos: 0 
	},
	{
		user: 'client',
		copy: 'Hmmmmmmmmmm... you forgot some weird lines under the logo...',
		pos: 200 
	}
]
var animations = [
	{
		id: 'logo1',
		start: 0,
		end: 1000
	}
];




var resize = function(){
	var rect = logo.getBoundingClientRect();
	console.log(two)
	logo.translation.set(two.width/2, two.height/2);
}
var two = new Two({ type: Two.Types['opengl'], height: $(window).height(), width: $(window).width()}).appendTo($('#logo')[0]);
var logo = two.interpret(document.getElementById("logo1")).center();
logo.fill = '#000';
resize();
two.update();

var addBubble = function(bubble){
	console.log(bubble)
}
_.each(conversation, addBubble);

$('#scroller').height($(window).height() + 1000)


$(window).bind('scroll', function(e){
	console.log($(window).scrollTop())
})