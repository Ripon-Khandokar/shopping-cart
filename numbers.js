//Log In Button Cllick Handeler
document.getElementById('login').addEventListener('click',function(){
  document.getElementById('login-area').style.display = 'none';
  document.getElementById('transition').style.display = 'block'
})


////Deposit Button button Click Handeler
document.getElementById('deposit').addEventListener('click', function(){
  const depositAmmount = document.getElementById('deposit-ammount').value;
  const depositNumber = parseFloat(depositAmmount);
  const currentBalance = document.getElementById('current-balance').innerText;
  const currentNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentNumber;
  document.getElementById('current-balance').innerText = totalBalance;
  

  const currentDeposit = document.getElementById('current-deposit').innerText;
  const deposit = parseFloat(currentDeposit);
  const total = depositNumber + deposit;
  document.getElementById('current-deposit').innerText = total;
  document.getElementById('deposit-ammount').value = "";
});
///WithDraw button click handeler
document.getElementById('withdraw').addEventListener('click', function(){
const withdrawAmmount = document.getElementById('withdraw-ammount').value;
const withdrawNumber = parseFloat(withdrawAmmount);

const currentBalance = document.getElementById('current-balance').innerText;
const balanceAmmount = parseFloat(currentBalance);
const totalBalance = balanceAmmount - withdrawNumber;
document.getElementById('current-balance').innerText = totalBalance;

const currentWithdraw = document.getElementById('current-withdraw').innerHTML;
const currentNumber = parseFloat(currentWithdraw);
const result = withdrawNumber + currentNumber;
document.getElementById('current-withdraw').innerText = result;
document.getElementById('withdraw-ammount').value = "";    

})
//New with draw ammount
