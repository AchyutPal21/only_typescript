/**
 * Single Repository Principle (SRP)
 *  - Aim to have a single class or module responsible for a single task
 *  or function related to your application. For example you could have
 *  separate module for handling product management, order processing
 *  and user authentication.
 *
 *  - Avoid creating God objects that try to handle multiple
 *  responsibility. Split your code into small, focused modules
 *  that are easier to understand and maintain.
 */

class Bird {
  fly() {}
  dimensions() {}
}

class SingleRepositoryPrinciple {}
