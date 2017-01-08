var colors = [ 'red', 'blue', 'green' ];

//Using For Loop traditionally
for (var i=0; i<colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color);
});

//Iterator Function
// It does something, and returns, take in the 2nd element, runs into iterator function


// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;

function adder(number) {
  sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
  sum += number;
});


//Or
numbers.forEach(adder);

// print the sum variable
console.log(sum);


// Example
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}

//Refactor
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function(post) {
      savePost(post);
    });
}


//Calculate area and store in array
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
    areas.push(image.height * image.width);
});
