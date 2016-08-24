$('.hideshow').toggle('go away');
	$('#signup').show();
}, function() {
	$('.hideshow').text('we make noise');
	$('#signup').hide();
});

$(".hideshow").click(function() {
	$(this).toggleClass("hideshowRED")
})
