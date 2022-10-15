
// Create a class called PersonAccount.It has firstname, lastname, incomes, expenses properties and 
// it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
// Incomes is an array of objects income and its description and expenses is also an array of objects
//  having expense and its description.

class PersonAccount {
    constructor(firstname, lastname, incomes, expense) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = incomes;
        this.expense = expense;
        this.totalIncome(incomes);
        this.totalExpense(expense);
        this.accountInfo(firstname, lastname, incomes, expense);
        this.addIncome();
        this.addExpense();
        this.accountBalance(firstname, lastname, incomes, expense);
    }
    totalIncome(incomes) {

        alert(" Person has " + incomes + " income...!");

    }

    totalExpense(expense) {

        alert(" Person has " + expense + " expense...!");

    }

    accountInfo(firstname, lastname, incomes, expense) {

        let savings = incomes - expense

        alert(firstname + " " + lastname + " " + " saves " + savings + " every month ");

    }

    addIncome() {

        alert(" This method shows anuall increment of income ");

    }

    addExpense() {

        alert(" This method will show extra expense of person ");

    }

    accountBalance(firstname, lastname, incomes, expense) {

        alert(firstname + " " + lastname + " " + " has " + incomes + " Incomes & " + expense + " Expense ")

    }



}
//   const  PersonAccount1 = new PersonAccount( 'Samad', 'Khan' , '50000' , '40000') ; 

// ===============================================================================================

// Create an Automobile class. The class will have name, model, color, type properties and
// create different methods e.g openOrCloseDoor() logs doors are opened or closed, start()
// logs car is ready for drive.

class Automobile {
    constructor(name, color, type, model) {
        this.name = name;
        this.color = color;
        this.type = type;
        this.model = model;
        this.start(name);
        this.openDoor();
        this.closeDoor();
    }
    start(name) {

        alert(name + " Is Ready For Drive");
    }
    openDoor() {

        alert(" Door Has Opened");
    }
    closeDoor() {

        alert(" Door Has Closed");
    }
}

//    const auto = new Automobile( 'Toyota' , 'Black' , 'Automatic' ,'2022') ;

// ===================================================================================================


// Create Car, Bus and Truck child class from the Automobile Class.


class Car extends Automobile {
    constructor(name, model, color, type) {
        super(name, model, color, type)
    }

}

class Bus extends Automobile {
    constructor(name, model, color, type, seats) {
        super(name, model, color, type)
        this.seats = seats;
    }
}


class Truck extends Automobile {
    constructor(name, model, color, type, tyre) {
        super(name, model, color, type)
        this.tyre = tyre;
    }

}
