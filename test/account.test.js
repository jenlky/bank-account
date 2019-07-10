const Account = require("../account");

let peter;
beforeEach(() => {
  peter = new Account();
});

describe("account", () => {
  it("should create an account object with balance property", () => {
    expect(peter.balance).toEqual(0);
  });

  it("should add money to balance with deposit", () => {
    peter.deposit(10);
    expect(peter.balance).toEqual(10);
  });

  it("should reduce amount from balance with withdrawal", () => {
    peter.deposit(10);
    peter.withdraw(5);
    expect(peter.balance).toEqual(5);
  });

  it("should print balance with balance function", () => {
    peter.deposit(10);
    peter.withdraw(5);
    expect(peter.getBalance()).toEqual(5);
  });

  it("should print statement with statement function", () => {
    peter.deposit(10);
    peter.deposit(5);
    peter.withdraw(2);
    expect(peter.getStatement()).toEqual(
      `DATE\t\tAMOUNT\t\tBALANCE\n${Account.formatDate()}\t\t+10\t\t10\n${Account.formatDate()}\t\t+5\t\t15\n${Account.formatDate()}\t\t-2\t\t13`
    );
  });

  it("should not withdraw more than available balance", () => {
    peter.deposit(10);
    expect(peter.withdraw(15)).toEqual(
      "Withdrawn amount is greater than balance"
    );
  });

  it("should not withdraw 0 or negative amount", () => {
    expect(peter.withdraw(-10)).toEqual("Cannot withdraw 0 or negative amount");
  });
});
