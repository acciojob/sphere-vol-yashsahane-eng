function volume_sphere() {
    //Write your code here
	const radius=parseFloat(document.getElementById("radius").value);
	const volume=(4/3)*Math.PI*Math.pow(radius,3);


	document.getElementById("volume").value=
		radius >=0 && isNaN(radius) ? volume.toFixed(4):"NaN";
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
