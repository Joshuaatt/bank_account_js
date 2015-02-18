var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount;
  },
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  }
};

$(function() {
  $("form#sign-up").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());

    var newBankAccount = Object.create(BankAccount);
      newBankAccount.name = inputName;
      newBankAccount.balance = initialDeposit;

      $("form#withdraw-deposit").submit(function(event) {
        event.preventDefault();

        var deposit = parseFloat($("input#deposit").val());
        var withdraw = parseFloat($("input#withdraw").val());
        newBankAccount.deposit(deposit);
        newBankAccount.withdraw(withdraw);
        $("#response").text(newBankAccount.balance);
        var deposit = $("input#deposit").val("");
        var withdraw = $("input#withdraw").val("");
      });

     $("#response").text(newBankAccount.balance);
     var inputName = $("input#name").val("");
     var initialDeposit = $("input#initial-deposit").val("");
  });
});
