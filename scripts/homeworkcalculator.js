function calculate(){

var eden = document.querySelector('.prvbox').value;
var dva = document.querySelector('.vtorbox').value;
var znak = document.querySelector('.operacija');
var fin = document.querySelector('.ednakvo');
var result = document.querySelector('.reshenie');

result.addEventListener('click', function(){
	if(znak == '+'){
			return (eden + dva);
		} else if(znak == '/'){
			return (eden / dva);
		} else if(znak == '-'){
			return (eden - dva);
		} else if(znak == '*'){
			return (eden * dva);
	}
}

}