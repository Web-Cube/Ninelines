import './vendor';

$(()=>{
	/* placeholder*/       
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){             
            $(this).attr('placeholder', placeholder);           
        });
    });
	
	
    /* skills*/
	
	$('.js-speed').each(function(){
		
		let skills_count = $('.js-skill-item').length;
		
		$('.js-skill-check').change(function(){
			const rotate_start = 33;
			
			let skills_check = $('.js-skill-check:checked').length,
				skills_percent = Math.round( skills_check/skills_count*100 ),
				skills_rotate = ( 180*skills_percent/100 ) - rotate_start,
				current_percent = $(".js-skill-percent").text()*1;
			
			$('.speed__arrow').css('transform', `rotate(${skills_rotate}deg)` );
			
			if (current_percent < skills_percent) {
				
				for( let i = current_percent; i <= skills_percent; i++ ){
					setDelay(i);
				}
				
			} else {
				var start_percent = current_percent - skills_percent;
					start_percent = skills_percent - start_percent;
				
				for( let i = start_percent ; i <= skills_percent; i++ ){
					setDelay(i);
				}
			}
			
			function setDelay(i) {
				setTimeout(function() {
					$(".js-skill-percent").text(i);
				}, 5*i);
			}
		});
		
	});
	
});