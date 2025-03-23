/**
 * Dependency Inversion Principle (DIP)
 * - Depend on abstraction rather than concrete implementation. This
 *  allows for loose coupling between components and facilitates easier
 *  testing and maintenance.
 *  - Use interfaces or abstracted classes to define contracts and rely
 *  on them in your code.
 *  - Apply dependency injection to provide implementation of these
 *  contacts
 *
 * Ensure that Object are loosely coupled that is reference should be an interface or ancestor class
 */

class DependencyInversionPrinciple {}

// Step 1: Create an abstraction (interface)
interface Database {
  save(data: string): void;
}

// Step 2: Implement the abstraction
class MySQLDatabase implements Database {
  save(data: string): void {
    console.log(`Saving "${data}" to MySQL database`);
  }
}

class MongoDBDatabase implements Database {
  save(data: string): void {
    console.log(`Saving "${data}" to MongoDB database`);
  }
}

// Step 3: Use Dependency Injection (inject the database dependency)
class UserService {
  private database: Database;

  constructor(database: Database) {
    // ✅ Inject dependency
    this.database = database;
  }

  createUser(name: string): void {
    this.database.save(name);
  }
}

// Step 4: We can now switch databases easily!
const mysqlService = new UserService(new MySQLDatabase());
mysqlService.createUser("Achyut"); // ✅ Output: "Saving 'Achyut' to MySQL database"

const mongoService = new UserService(new MongoDBDatabase());
mongoService.createUser("Achyut"); // ✅ Output: "Saving 'Achyut' to MongoDB database"
