function calculateBMI() {
	var bmi;
	var bmiText;
	bmi = document.bmi.Paino.value / Math.pow((document.bmi.Pituus.value / 100), 2);
	
	if (bmi < 15) {bmiText = ", Sairaalloinen alipaino";}
	else if (bmi >= 15 && bmi < 17) {bmiText = ", Merkittävä alipaino";}
	else if (bmi >= 17 && bmi < 18.5) {bmiText = ", Normaalia alhaisempi paino";}
	else if (bmi >= 18.5 && bmi < 25) {bmiText = ", Normaali paino";}
	else if (bmi >= 25 && bmi < 30) {bmiText = ", Lievä ylipaino";}
	else if (bmi >= 30 && bmi < 35) {bmiText = ", Merkittävä ylipaino";}
	else if (bmi >= 35 && bmi < 40) {bmiText = ", Vaikea ylipaino";}
	else if (bmi >= 40) {bmiText = ", Sairaalloinen ylipaino";}
	else {bmiText = " ";}

	document.getElementById('resultNumber').innerHTML = bmi.toFixed(1) + bmiText;
}