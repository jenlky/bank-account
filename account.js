class Account {
  constructor() {
    this.balance = 0;
    this.statement = "DATE\t\tAMOUNT\t\tBALANCE";
  }

  deposit(amount) {
    this.balance += amount;
    this.statement += `\n${Account.formatDate()}\t\t+${amount}\t\t${
      this.balance
    }`;

    // console.log(this.statement);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Cannot withdraw 0 or negative amount");
    } else if (this.balance > amount) {
      this.balance -= amount;
      this.statement += `\n${Account.formatDate()}\t\t-${amount}\t\t${
        this.balance
      }`;
    } else {
      throw new Error("Withdrawn amount is greater than balance");
    }

    // console.log(this.statement);
  }

  static formatDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = dd + "/" + mm + "/" + yyyy;
    return today;
  }

  getBalance() {
    return this.balance;
  }

  getStatement() {
    return this.statement;
  }
}

module.exports = Account;
