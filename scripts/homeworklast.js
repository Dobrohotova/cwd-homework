var var_selektor = document.getElementById("select_gradovi");

var city=var_selektor.options[var_selektor.selectedIndex].value;
getWeatherByCityName(city);

var_selektor.addEventListener("change", function(){
    			var city=var_selektor.options[var_selektor.selectedIndex].value;
				getWeatherByCityName(city);
});


function getWeatherByCityName(city){
			var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+',mk&units=metric&APPID=87df752ff544d906183cc03f17b4c9fc';
			fetch(url).then(function(result){
			   result.json().then(function(data){	
				   var body = document.querySelector('body');
				   var temp = document.querySelector('.temp'); 
				   var pres = document.querySelector('.pres'); 
				   var wind = document.querySelector('.wind'); 
				   var grad = document.querySelector('.grad');	
				   var sel = document.querySelector('.selektor');	
				   grad.innerText = data.name;
				   temp.innerText = data.main.temp;
				   pres.innerText = data.main.pressure;
				   wind.innerText = data.wind.speed;

					var iconUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
					document.querySelector('img').src = iconUrl;
				});
			})
}



