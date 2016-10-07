
$(document).ready(function(){
	var i=0;

	var tab =["change de jeux", "Je t'ai dit de changer de jeux", "Tu m'enerves", "arret de jouer","Ciao"];

	$(".cake-is-a-lie").click(function(){
		i++;
		$(".counter").text(i);

		if (i%20===0)
		{
			
			var textaleatoire = Math.floor(Math.random()*(5-1))+1;
			var aleatoire = tab[textaleatoire]


			alert(aleatoire);

		}

	});

})



