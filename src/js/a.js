var $ = require('jquery');
module.exports = function(){

 	console.log('ajs ');   
	 $(function(){
		var liHeight=$('#result li').height();
		var count=$('#result li').length;
		var dheight=liHeight*2;
		var allheight=liHeight*count/3;
		var n=1;
		$('#btnTest').click(function(){
			$('#loader').animate({'opacity':1},200,function(){
				n++;
				h=dheight*n;
				if(h>allheight){
					$('#btnTest').hide();
				}
				$('body').animate({scrollTop:320},500); 
				$('#result').height(h);
				$('#loader').css('opacity',0);
			})
		})
	})

}


