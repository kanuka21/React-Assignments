class Account {
  constructor(id, name, balance) {
    (this.id = id), (this.name = name), (this.balance = balance);
  }
}

class SavingAccount extends Account {
  constructor(id, name, balance, interest) {
    super(id, name, balance);
    this.interest = interest;
  }
}

class CurrentAccount extends Account {
  constructor(id, name, balance, cashCredit) {
    super(id, name, balance);
    this.cashCredit = cashCredit;
  }
}

let totalBankBalance = (...accounts) => {
  let totalBalance = 0;
  accounts.forEach((singleAccount) => {
    if (singleAccount.constructor.name === "SavingAccount") {
      totalBalance =
        totalBalance + singleAccount.balance + singleAccount.interest;
    } else {
      totalBalance += singleAccount.balance;
      totalBalance -= singleAccount.cashCredit;
    }
  });
  return totalBalance;
};

const account1 = new SavingAccount(151860002536,"Kanuka Goel",600000,4000);
const account2 = new CurrentAccount(151860002537, "Akash Sharawat", 25000, 10000);
const account3 = new SavingAccount(151860002538, "tani aggarwal", 90000, 4000);
const account4 = new CurrentAccount(151860002539, "Shivi garg", 30000, 5000);

console.log(
  "Total Balance in Bank is: " +
    totalBankBalance(account1, account2, account3, account4)
);
