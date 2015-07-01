function RedOrGreen(mySquare) {

this.makeGreen = function() {
	document.getElementById(mySquare).style.backgroundColor = "Green";

}
this.makeRed = function() {
	document.getElementById(mySquare).style.backgroundColor = "Red";
	}
}