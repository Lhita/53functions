function shortest_word(str) {
    var jr = str.split(" ");   // the result will be an array with the values:
    var shortest = jr[0].length;  //we have assigned the array value to the shortest             

    var trv = 0;  // declaring equal to nothing
    for (var i = 1; i<jr.length; i++) { //comparing all the items in the array
        if (shortest>jr[i].length){ //it assumes that molweni which is seven is the shortest  and if it greater than seven then moves to checkthe next and the last one and returns 5
            shortest = jr[i].length;
            trv = jr[i];
        }
    }
 
return [trv,shortest];
}

