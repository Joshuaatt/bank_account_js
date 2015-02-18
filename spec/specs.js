describe("BankAccount", function() {
  describe("deposit()", function() {
    it("adds money to the account", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(15);
      expect(testAccount.balance).to.equal(15);
    });
  });
  describe("withdraw()", function(){
    it("takes away money in the account", function(){
      var testAccount = Object.create(BankAccount);
      testAccount.withdraw(15);
      expect(testAccount.balance).to.equal(-15);
    });
  });
});
