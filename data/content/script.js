function img_size(num,w,h) { //функция изменения размера картинки.
  var num,w,h;
document.getElementsByClassName(num)[0].style.width = w + "px";
document.getElementsByClassName(num)[0].style.height = h + "px";
}
//document.getElementsByClassName('cookie_img')[0]
var MouseX;
var MouseY;
var div = document.createElement('div');
div.appendChild(document.createTextNode('+1'));  //  Добавим текст в див.
div.style.position = 'absolute';
div.style.width = '20px';
div.style.height = '20px';
div.style.color = 'white';
div.style.fontSize = '25px';
div.style.pointerEvents =  'none';
div.id = 'sas';

$('.cookie_img').mousedown(function(event){	//анимация и добавление дива по нажатию мыши по картинке.
	img_size('cookie_img',195,195);
	
		e = event || window.event;

	if (e.pageX == null && e.clientX != null ) { 
		var html = document.documentElement;
		var body = document.body;
	
		e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
		e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
	}
	add_div(e.pageX+Math.floor(Math.random()*(-20)+Math.random()*11), e.pageY+Math.floor(Math.random()*(-20)+Math.random()*11));
});





$('.cookie_img').mouseup(function(){ //анимация и удаление дива по отжатию мыши от картинки.
	img_size('cookie_img',200,200);
	remove_div();
	
});
$('.cookie_img').mouseup(function(){ //анимация и удаление дива по отжатию мыши от картинки.
	img_size('cookie_img',200,200);
	try{
		remove_div();
	}
	catch(e){
		console.log(e);
	}
});


$('.cookie_img').mousemove(function(){ //анимация и удаление дива по отжатию мыши от картинки.
	img_size('cookie_img',200,200);
	try{
		div.remove();
	}
	catch(e){
		console.log(e);
	}
});




function add_div(x, y){ 		//функция добавления div на страницу.
	div.style.left = x + "px";   
	div.style.top = y + "px";    
	document.body.appendChild(div);   
}
function remove_div(){			//функция удаления div со страницы.
	//document.body.removeChild(div);  
	div.remove();
}
function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
}




// $('.cookie_img').mouseup(function(event){
	// e = event || window.event;

	// if (e.pageX == null && e.clientX != null ) { 
		// var html = document.documentElement;
		// var body = document.body;
	
		// e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
		// e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
	// }
	
	// MouseX = e.pageX;
	// MouseY = e.pageY;
	// console.log(e.pageX);
	// console.log(e.pageY);
	
	
	
// });




