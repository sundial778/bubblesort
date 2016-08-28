$(document).ready(function()
{

	function printToPage (msg)
	{
		var message = "<p>" + msg + "<\p>";
		$("#mainSection").append (message);
	}

	// list of quiz scores
	var scores = [46, 41, 34, 33, 30, 30, 28, 27, 25, 21];

	// this function takes in an array and sorts it by numeric value
	//these set the variables
window.ammountOfNumbers = null
window.numbersToSort = []
// This lets the user decide to use preloaded numbers or to insert their own
var yourChoice = function () {
    var choose = prompt("Do you want to insert your own numbers?")
    //user wants to use their own numbers
    if (choose.toUpperCase() == "YES") {
        ammountOfNumbers = document.getElementsById("arrayGenerator").value
        while (parseInt(ammountOfNumbers) > numbersToSort.length) {
            var insertNum = prompt("Insert number")
            if (Number.isNaN(parseInt(insertNum))) {
                alert("Please insert whole numbers only")

            }
            else {
                numbersToSort.push(insertNum)
            }
        }

    }
        //user wants to use preloaded numbers
    else if (choose.toUpperCase() == "NO") {
        ammountOfNumbers = 10
        numbersToSort = [17, 10, 76, 3, 4, 19, 44, 22, 7, 69]
        }
    else {
        alert("Please type yes or no")
    }
}
// At this point, the user inserts how many numbers they want to insert for sorting.

//this statement compares the ammountOfNumbers variable and the numbersToSort variable. It requests user input until the variables are equal


	function bubbleSort(array)
	{
		yourChoice()
		 var length = array.length;
    for (var k = 0; k < array.length; k++) { //This is the ammount of times it has to pass through
        for (var j = 0, l = j + 1; j, l < (array.length - k - 1) ; j++, l++) { // J and  l less than the length of the array  - the ammount of passes minus 1
            if (array[j] > array[l]) {
                //This swaps the numbers
                var temporary = array[j];  
                array[j] = array[l]; // array of j is replaced with array of l
                array[l] = temporary; //array of l is replaced with array of j
            }
         }
    }
return numbersToSort
		
	}

	printToPage ("The sorted array is " +  numbersToSort );

});