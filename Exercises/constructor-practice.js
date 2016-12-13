class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  filePerson() {
    console.log(this.firstname + this.lastname + this.age);
  }
}

let person1 = new Person('Oliver', 'Lai', 27);

person1.filePerson()
