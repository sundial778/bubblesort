$(document).ready(function () {
    // this if for the lazy user that refuses to type numbers. This is for ease of access in checking that the function works.
    var randomArray = [];
    function randomize() {


        for (var u = 0, p = 40; u < p; u++) {
            while (randomArray.length < 12) {
                randomArray.push(Math.round(Math.random() * p))
                document.getElementById('randomNumbers').innerHTML = "The random numbers are " + randomArray
            }
        }
    }
    randomize()

    function printToPage(msg) {
        if ($('p').length) {
        	console.log("hello")
            $('p').remove()
            var message = "<p>" + msg + "<\p>";
            $("#mainSection").append(message);
        }
        else {
            var message = "<p>" + msg + "<\p>";
            $("#mainSection").append(message);
            console.log("bye")
        }
    }


    // this function takes in an array and sorts it by numeric value
    //these set the variables
    window.numbersToSort = []
    // This lets the user decide to use preloaded numbers or to insert their own

    $("#usePrewrittenNumbers").click(function (e) {

        e.preventDefault();

        //user wants to use preloaded numbers
        numbersToSort = randomArray
        bubbleSort(numbersToSort)


    });

    //user wants to use their own numbers  
    $("#useOwn").click(function (e) {
        e.preventDefault();
        if (document.getElementById("arrayGenerator").value.length === 0) {
            printToPage("Please insert numbers seperated with commas.")
        }
        else {
            var stringy = document.getElementById("arrayGenerator").value
            numbersToSort = stringy.split(",")

            ///tttttegkeqjbqetjbtelkjb

            for (a = 0; a < numbersToSort.length; a++) {
                if (isNaN(parseFloat(numbersToSort[a])) === true) {
                    //this checks the user input and filters out all non number values      
                    numbersToSort.splice(a, 1);
                    a--;
                    console.log(numbersToSort[a])
                }
                //this converts the remaining values into the array of numbers to sort
                numbersToSort[a - 1] = parseFloat(numbersToSort[a - 1])

            }

            bubbleSort(numbersToSort)
        }


    });




    //this statement compares the ammountOfNumbers variable and the numbersToSort variable. It requests user input until the variables are equal


    function bubbleSort(array) {
        var swapped = true

        while (swapped == true) {
            var ammountSwapped = 0
            //This is the ammount of times it has to pass through
            for (var j = 0, l = j + 1; j, l < (array.length) ; j++, l++) {
                // J and  l less than the length of the array  - the ammount of passes minus 1
                if (array[j] > array[l]) {

                    //This swaps the numbers
                    var temporary = array[j];
                    array[j] = array[l]; // array of j is replaced with array of l
                    array[l] = temporary; //array of l is replaced with array of j
                    swapped = true
                    console.log(array[j])
                    console.log(array[l])
                    ammountSwapped++
                }

            }
            if (ammountSwapped == 0) {
                swapped = false
            }
        }
        printToPage("The sorted array is " + numbersToSort);

    }




});
