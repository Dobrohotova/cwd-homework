var var_selektor = document.getElementById("select_gradovi");

var city=var_selektor.options[var_selektor.selectedIndex].value;
getWeatherByCityName(city);

var_selektor.addEventListener("change", function(){
    			var city=var_selektor.options[var_selektor.selectedIndex].value;
				getWeatherByCityName(city);
});


function getWeatherByCityName(city){
			var url = 'http://airquality.moepp.gov.mk/graphs/site/pages/MakeGraph.php?graph=StationLineGraph&station='+city+'&parameter=PM10&endDate=2016-12-29&timeMode=Week&background=false&i=1483013484461&lang=mk';
			fetch(url).then(function(result){
			   result.json().then(function(data){	
				   var body = document.querySelector('body');
				   var pm = document.querySelector('.chestici');
				   var grad = document.querySelector('.grad'); 
				   var sel = document.querySelector('.selektor');

				   console.log(data);

				   grad.innerText = data.stations;
				   pm.innerText = data.measurements[0];


				   if (pm > 50) {
						alert('Opasnost!!');
							var img = document.createElement("img");
							img.src = "../media/images/mask-gas-male-man-46796.jpeg";
							var src = document.querySelector("body");
							body.appendChild(img);
					// plus da prikazhe rezultat
					} else if (pm < 50) {
							// da si prikazhe rezultat za chesticite
						} else if (pm = 50) {
							alert('Zagadenosta e na granica! Se preporachuva ....')
						};
				});
			})
}









// if (city == Skopje) {
// 	var SkopjeUrl = 'http://airquality.moepp.gov.mk/graphs/site/pages/MakeGraph.php?graph=StationLineGraph&station=Centar&parameter=PM10&endDate=2016-12-29&timeMode=Week&background=false&i=1483013484461&lang=mk';
// } else if (city == Veles) {
// 	var VelesUrl = 'http://airquality.moepp.gov.mk/graphs/site/pages/MakeGraph.php?graph=StationLineGraph&station=Veles1&parameter=PM10&endDate=2016-12-29&timeMode=Week&background=false&i=1483013674742&lang=mk';
// }


