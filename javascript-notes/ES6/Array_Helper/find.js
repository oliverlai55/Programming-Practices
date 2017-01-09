var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user;

for (var i=0; i<user.length; i++) {
  if (user[i].name === 'Alex') {
    user = user[i];
  }
}

//user find() method
users.find(function(user) {
  return user.name === 'Alex';
});

//it will find the first element that matches, but ONLY the first one if there are more matches

function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});


var posts = [
  { id: 1, title: 'New Post'},
  { id: 2, title: 'Old Post'}
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  })
}

postForComment(posts, comment);

//When do we use Find helper??
//forum or blog, when user clicks, one specific post shows up with post/id
