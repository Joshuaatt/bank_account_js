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
      if (isNaN(initialDeposit)) {
        initialDeposit = 0;
        newBankAccount.balance = initialDeposit;
      } else {
      newBankAccount.balance = initialDeposit;
    }

      $("form#withdraw-deposit").submit(function(event) {
        event.preventDefault();

        var deposit = parseFloat($("input#deposit").val());
        var withdraw = parseFloat($("input#withdraw").val());
        if (isNaN(withdraw) && isNaN(deposit)) {
          withdraw = 0;
          deposit = 0;
          newBankAccount.deposit(deposit);
          newBankAccount.withdraw(withdraw);
          $("#response").text("$ " + newBankAccount.balance);
        } else if (isNaN(deposit)) {
          deposit = 0;
          newBankAccount.deposit(deposit);
          newBankAccount.withdraw(withdraw);
          $("#response").text("$ " + newBankAccount.balance);
        } else if (isNaN(withdraw)) {
          withdraw = 0;
          newBankAccount.deposit(deposit);
          newBankAccount.withdraw(withdraw);
          $("#response").text("$ " + newBankAccount.balance);
        } else {
          newBankAccount.deposit(deposit);
          newBankAccount.withdraw(withdraw);
          $("#response").text("$ " + newBankAccount.balance);
        }
        var deposit = $("input#deposit").val("");
        var withdraw = $("input#withdraw").val("");
      });

     $("#response").text("$ " + newBankAccount.balance);
     $("#balance").show();
     $(".user").text(newBankAccount.name)
     var inputName = $("input#name").val("");
     var initialDeposit = $("input#initial-deposit").val("");
  });
});
