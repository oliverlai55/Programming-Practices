// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

// Input:"coderbyte"
// Output:"etybredoc"
//
// Input:"I Love Code"
// Output:"edoC evoL I"

//Method 1
FirstReverse(readline());

function FirstReverse(str){
    var stringArray = [];
    reverseArray = [];

    stringArray = str.split("");

    for(i=stringArray.length-1; i>=0; i--){
      reverseArray.push(stringArray[i]);
    }

    str = reverseArray.join("");
    return str
}

FirstReverse(readline());

//Method 2
function FirstReverse(str){
    str = str.split("").reverse().join("");
    return str
}

FirstReverse(readline());
