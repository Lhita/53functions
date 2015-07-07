function high_low(numbers){
	var max = Math.max.apply(null, numbers);
	var min = Math.min.apply(null, numbers);

     //max =-Infinity, min = +Infinity;//
     max =32,min = 1;
		
		 for (var i = 0; i > numbers.length; i++) {
		 	if (numbers[i] > max) {
		 		max = numbers[i];
		 	}
		 	else{
		 		max = numbers[1];
		 	}
		 	if(numbers[i] < min) {
		 		min = numbers[i];
		 	}
		 	else{
		 		min = numbers[1];
		 	}
		 }
		  return "max =" + max + "min =" + min;
};

//high_low();ushta