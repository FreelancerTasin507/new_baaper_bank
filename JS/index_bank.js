/* Deposit section*/
document.getElementById("btn_deposit").addEventListener("click", function () {
  const deposit_field = document.getElementById("deposit_field");
  const new_deposit_field_string = deposit_field.value;
  const new_deposit_field = parseFloat(new_deposit_field_string);
  deposit_field.value = "";
  if (isNaN(new_deposit_field)) {
    alert("Please Enter Only Numbers");
    return;
  }

  const deposit_previous = document.getElementById("deposit_total");
  const new_deposit_previous_string = deposit_previous.innerText;
  const new_deposit_previous = parseFloat(new_deposit_previous_string);

  const current_deposit_amount = new_deposit_previous + new_deposit_field;
  deposit_previous.innerText = current_deposit_amount;

  const previous_balance = document.getElementById("balance_total");
  const new_previous_balance_string = previous_balance.innerText;
  const new_previous_balance = parseFloat(new_previous_balance_string);

  const current_total_balance = new_previous_balance + new_deposit_field;
  previous_balance.innerText = current_total_balance;
});

// Withdraw section

document.getElementById("btn_withdraw").addEventListener("click", function () {
  const withdraw_field = document.getElementById("withdraw_field");
  const new_withdraw_field_string = withdraw_field.value;
  const new_withdraw_field = parseFloat(new_withdraw_field_string);
  withdraw_field.value = "";

  const previous_withdraw = document.getElementById("withdraw_total");
  const new_previous_withdraw_string = previous_withdraw.innerText;
  const new_previous_withdraw = parseFloat(new_previous_withdraw_string);


  const previous_balance = document.getElementById("balance_total");
  const new_previous_balance_string = previous_balance.innerText;
  const new_previous_balance = parseFloat(new_previous_balance_string);

  if(new_withdraw_field > new_previous_balance){
    alert('You dont have Enough Money !!');
    return;
  }

  
  const current_withdraw_amount = new_withdraw_field + new_previous_withdraw;
  previous_withdraw.innerText = current_withdraw_amount;
  
  const current_total_balance = new_previous_balance - new_withdraw_field;
  previous_balance.innerText = current_total_balance;
});
