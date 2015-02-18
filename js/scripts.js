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
    var initialDeposit = $("input#initial-deposit").val();


  });
});
