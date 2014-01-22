$('.activate-box').click(function(){
  console.log('the button clicked');

  $('.box').addClass('active');	
});

// $('.expandable').focus(function(){
// 	console.log('focused on an input!');

// 	$(this).addClass('error');
// })

$('.submit').click(function(){
	console.log('focused on an input');

	$('.expandable').each(function(){
		if ($(this).val() == '') {
			$(this).addClass('error');
		}
	});
});

//Example 1
$('.hide-this').click(function(){
  $(this).slideUp();
});

//Example 2
$('.get-big').hover(function(){
  $(this).addClass('get-bigger');
});

//Example 3
$('.text-field').mouseenter(function(){
  $(this).addClass('mouse-enter');
});

//Example 4
$('.change-up').bind( "mouseenter mouseleave", function(){
  $(this).toggleClass('change');
});

//Example 5
$('.dbl-click-this').dblclick(function(){
  $(this).addClass('dbl-click');
});

//Example 6
$('.focus-pocus').mouseover(function(){
  $('.input-field').focus();

})

//Example 7
$('td').click(function(){
  $(this).toggleClass('data-toggle');
});

//Example 8 
$('.magic-inside').mousedown(function(){
  $('.magic').slideUp();
});

//Example 9
$('.button-trigger').click(function(){
  $('.input-trigger').trigger('focus');
});

//Example 10
$('.loser').mouseleave(function(){
  $(this).removeClass('we-lose');
});

//Example 11
$('.hide-me').dblclick(function(){
  $(this).hide('slow');
});

//Example 12
$('.fade-away').hover(function(){
  $(this).fadeOut('fast');
});

//Example 13
$('a').click(function(){
  $('.pswd').fadeIn(1000,function(){
    $('span').fadeIn(100);
  });
  return false;
});

//Example 14 & 15
$('.find-me span').click(function(){
  $(this).fadeOut(500, function(){
    $('.find-me div').text('"' + $(this).text() + '" has faded out!');
    $(this).remove();
  });
});
$('.find-me span').hover(function(){
  $(this).addClass('hilite');
}, function(){
  $(this).removeClass('hilite');
});
