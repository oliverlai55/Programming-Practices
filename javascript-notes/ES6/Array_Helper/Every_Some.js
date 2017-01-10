var computers = [
   { name: 'Apple', ram: 24 },
   { name: 'Compaq', ram: 4},
   { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
   var computer = computers[i];

   if (computer.ram < 16) {
      allComputersCanRunProgram = false;
   } else {
      onlySomeComputersCanRunProgram = true;
   }
}


computers.every(function(computer) {
   return computer.ram > 16;
});
// every condition has to meet

computers.some(function(computer) {
   return computer.ram > 16;
})
// only SOME condition has to be met


var names = [
   "Alexandria",
   "Matthew",
   "Joe"
];

names.every(function(name) {
   return name.length > 4;
});

names.some(function(name) {
   return name.length > 4;
});


function Field(value) {
   this.value = value;
}

Field.prototype.validate = function() {
   return this.value.length > 0;
}; 

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

username.validate();

var fields = [username, password, birthdate];

var formisValid = fields.every(function(field) {
   return field.validate();
});


if (formisValid) {
   //alow user to submit
} else {
   //send message warning
}
