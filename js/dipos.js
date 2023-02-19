




document.getElementById('btn-diposit').addEventListener('click',function(){
 const dipositField=document.getElementById('diposi-field');
const newipositAmountString=dipositField.value ;
const newipositAmount=parseFloat(newipositAmountString);
                            
                           
                            // stap3
 const depositTotal=document.getElementById('deposit-total');
 const previousDepositString=depositTotal.innerText;
 const previousDeposit=parseFloat(previousDepositString);

const currentDepositTotal=previousDeposit+newipositAmount
// set the diposit 
 depositTotal.innerText= currentDepositTotal;
                            

//  balance
const balanceTotalElement =document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalance= parseFloat(previousBalanceTotalString);



// stap 6calculate
const currentBalanceTotal = previousBalance+newipositAmount;

// set the balance totol
balanceTotalElement.innerText= currentBalanceTotal;
                            
 // clear 
 dipositField.value=''
                            
})