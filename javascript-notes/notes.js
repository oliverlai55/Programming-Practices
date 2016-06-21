split
The split() method is used to split a string into an array of substrings, and returns the new array.
Tip: If an empty string ("") is used as the separator, the string is split between each character.

push
The push() method adds new items to the end of an array, and returns the new length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
Banana,Orange,Apple,Mango,Kiwi

pop
Remove the last element of an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
Banana,Orange,Apple


splice
The splice() method adds/removes items to/from an array, and returns the removed item(s).

array.splice(index,howmany,item1, ...,itemX)
index:Required, an integer that specifies at what position to add/remove items, Use negative values
to specify the position from the end of the array.

howmany: Required, The number of items to be removed. If set to 0, no items will be removed
item1,...,itemX: Optional, The new item(s) to be added to the array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
Banana,Orange,Lemon,Kiwi,Apple,Mango

unshift
The unshift() method adds new items to the beginning of an array, and returns the new length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
Lemon,Pineapple,Banana,Orange,Apple,Mango

shift
The shift() method removes the first item of an array, and returns that item.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
Orange,Apple,Mango

replace


sort
if sort() is called with no argument, then the array is sorted lexicographically, in dictionary order
	when each value is treated as a string.

var letters = ['R', 'O', 'F', 'L'];
letters.sort()
produced ['F', 'L', 'O', 'R']

1. if the function returns less than zero, sort a before b
2. if the function returns greater than zero, sort b before a
3. if the function returns zero, leave a and b unchanged with respect to each other

var numbers = [8,5];
    
numbers.sort(function(a, b)
{
    return a - b;	
});
    
alert(numbers);    //produces [5,8]

var numbers = [4,3,5,9];
    
numbers.sort(function(a, b)
{
    return b - a;	
});
    
alert(numbers);    //produces [9,5,4,3]


REGEX



sum
math.random
indexOf
listing objects
finding max, min
document.getElementById
innerHTML





bootstrap off grid system