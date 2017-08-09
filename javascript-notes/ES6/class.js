class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); //Car.constructor() used to inherit the methods from the parent class
    this.color = options.color;
  }

  honk() {
    return 'beep';
  } 
}

const toyota = new Toyota({ color: 'red' });

toyota.honk();
toyota.drive();
