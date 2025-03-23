/**
 * Liskov's Substitution Principle (LSP)
 *  - Ensure that subclass or derived classes can be substituted for
 *  their base classes without affection the correctness of the program
 *
 *  - Design your application's interface and contacts carefully to
 *  allow for polymorphism and interchangeable components
 *
 *  Ensure that your parent class reference can hold child class object
 *
 *  class A { }
 *
 *  class B extends A { }
 *
 *  A a = new B()
 */
class LiskovSubstitutionPrinciple {}

interface Car {
  drive(): void;
}

class XUV implements Car {
  drive(): void {
    console.log("Driving XUV...");
  }
}

class Sedan implements Car {
  drive(): void {
    console.log("Driving Sedan...");
  }
}

const car: Car = new XUV();
console.log(car.drive());
