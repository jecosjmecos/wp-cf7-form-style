/*CF7 mail send*/
document.addEventListener( 'wpcf7mailsent', function( event ) {
	$.fancybox.close();
	$.fancybox.open({ src: '#popupMailSend', smallBtn : false});
}, false );
/*CF7 mail end*/