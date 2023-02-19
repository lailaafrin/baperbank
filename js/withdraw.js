


document.getElementById('btn-withdraw').addEventListener('click',function(){
// withdraw amount inputfield

const whitdrawField =document.getElementById('withdraw-field');
const newwithDrawFieldString = whitdrawField.value ;
const newwithDrawAmount =parseFloat(newwithDrawFieldString);



const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousTotal=parseFloat(previousWithdrawTotalString);

const currentWithdrawTotal =previousTotal+newwithDrawAmount;
 
// set the value
withdrawTotalElement.innerText= currentWithdrawTotal;



const balanceTotalElement =document.getElementById('balance-total');

const previousBalanceTotalString =balanceTotalElement.innerText;
const previousBalanceTotal =parseFloat(previousBalanceTotalString);

// komle nagative set

const newBalanceTotal =previousBalanceTotal -newwithDrawAmount;

// set
balanceTotalElement.innerText =newBalanceTotal;

// clear
whitdrawField.value='';
});

