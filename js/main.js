
// REQUIRED INPUT
$('.feedback form').submit(function(e){
	e.preventDefault();

	var error = false;
	
	console.log($('input[type=text]'));
	
	$('input.req').each(function(){
		if( $(this).val() == '' ) {
			$(this).effect('highlight');
			error = true;
		}
	});
	
	if(!error) {
		$(this).css('display','none');
		$('.form_sent').css('display','block');
	}

});
//  REFRESH - NEW SEND FORM 
$('input[type=button]').click(function(e){
	e.preventDefault;
	
	$(this).css('display', 'none');
	$('.feedback').css('display', 'block');
});
//  NO ENTER
$(function() {
    $('form').each(function() {
        $(this).find('input.req').keypress(function(e) {
            if(e.which == 10 || e.which == 13) {
                this.form.submit();
            }
        });
        $(this).find('input[type=submit]').hide();
    });
});


// SLIDER HOVER BUTTON
$(function(){
	$('#button').hover(function(){
		$('#button').attr('src', 'img/chev_left_black.png').css('cursor', 'pointer');
	},
	function(){
		$('#button').attr('src', 'img/chev_left.png');
	});
});

$(function(){
	$('#button_r').hover(function(){
		$('#button_r').attr('src', 'img/chev_right_black.png').css('cursor', 'pointer');
	},
	function(){
		$('#button_r').attr('src', 'img/chev_right.png');
	});
});






