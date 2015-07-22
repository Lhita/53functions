function longest_word(january) {
    var sen = january.split(" ");   // the result will be an array with the values:
    var longest = 0;               // declaring 
    var travis = null;             //equal to nothing
    	for(var i = 0; i < sen.length; i++) { //comparing all the items in the array
        	if(longest < sen[i].length) {
            	longest = sen[i].length;
            	travis = sen[i];
        }
    }
 
return [travis, longest];
}
