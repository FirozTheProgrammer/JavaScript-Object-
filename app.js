const salaryPay = {
  id: 01,
  firstName: "Firoz",
  lastName: "Hasan",
  salary: 40000,
  chargeBill: function (amount, tax, tips) {
    this.salary = this.salary - amount - tax;
    this.salary = this.salary + tips;
    return this.salary;
  },
};

salaryPay.chargeBill(3000, 1000, 1500);

console.log(`My salary is : ${salaryPay.salary}`);

const heroPay = {
  id: 02,
  name: "Firoz",
  salary: 25000,
};

const friendPay = {
  is: 03,
  name: "Hasan",
  salary: 20000,
};

//bind

const heroChargeBill = salaryPay.chargeBill.bind(heroPay);
heroChargeBill(3400, 3000, 1000);
console.log(`Hero salary is : ${heroPay.salary}`);

//call

salaryPay.chargeBill.call(heroPay, 3000, 300, 1000);
console.log(`Hero salary ${heroPay.salary}`);

//apply
salaryPay.chargeBill.apply(friendPay, [2000, 200, 750]);
console.log(`Friend salary is : ${friendPay.salary}`);
