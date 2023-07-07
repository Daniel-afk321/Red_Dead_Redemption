$(()=>{
	$('.efeito').waypoint(function(){
$('#card1').addClass('efeito_aparecer animated bounceInLeft');
$('#card2').addClass('efeito_aparecer animated bounceInUp');
$('#card3').addClass('efeito_aparecer animated bounceInUp');
$('#card4').addClass('efeito_aparecer animated bounceInRight');
	}, { offset: '50%'});	
});







