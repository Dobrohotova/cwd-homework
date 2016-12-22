var eden = document.querySelector('.prvbox');
var dva = document.querySelector('.vtorbox');
var znak = document.querySelector('.operacija');
var result = document.querySelector('.reshenie');

function calculate(){
	// switch(znak.value){
	// 	case 'plus':
	// 		result.innerText = parseInt(eden.value) + parseInt(dva.value);
	// 	break;
	
	// 	case 'minus':
	// 		result.innerText = parseInt(eden.value) - parseInt(dva.value);
	// 	break;
	
	// 	case 'multiply':
	// 		result.innerText = parseInt(eden.value) * parseInt(dva.value);
	// 	break;
	
	// 	case 'divide':
	// 		result.innerText = parseInt(eden.value) / parseInt(dva.value);
	// 	break;
	
	// 	case 'dec':
	// 		result.innerText = parseInt(eden.value) % parseInt(dva.value);
	// 	break;
	// }

	if(znak.value == 'plus'){
		result.innerText = parseInt(eden.value) + parseInt(dva.value);
	} else if(znak.value == 'minus'){
		result.innerText = parseInt(eden.value) - parseInt(dva.value);
	} else if(znak.value == 'multiply'){
		result.innerText = parseInt(eden.value) * parseInt(dva.value);
	} else if(znak.value == 'divide'){
		result.innerText = parseInt(eden.value) / parseInt(dva.value);
	}
}
	
eden.addEventListener('keyup', calculate);
dva.addEventListener('keyup', calculate);
eden.addEventListener('change', calculate);
dva.addEventListener('change', calculate);
znak.addEventListener('change', calculate);
result.addEventListener('change', calculate);