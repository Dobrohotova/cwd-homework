function calculate(){

var eden = document.querySelector('.prvbox').value;
var dva = document.querySelector('.vtorbox').value;
var znak = document.querySelector('.operacija');
var fin = document.querySelector('.ednakvo');
var result = document.querySelector('.reshenie');

// na result ili na fin kje treba da se stavi eventListener?! Kako da se 
// kazhe deka sakash koga kje klikne na fin(button) rezultatot da go dava
// vo result

fin.addEventListener('click', function(){
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

function answer(){
	result.value = eval();
}

}