document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const withdrawAmount = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);


    withdrawAmount.value= '';

    if(isNaN(newWithdrawAmount)){
        alert('please provied a valid number')
        return;
    }

    const withdrawAmountTotal =document.getElementById('withdraw-amount');
    const withdrawAmountTotalString =withdrawAmountTotal.innerText;
    const newWithdrawTotalAmount = parseFloat(withdrawAmountTotalString);

    

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const newTotalBalance = parseFloat(totalBalanceString);

    if(newWithdrawAmount > newTotalBalance){
        alert('baap ar bank a ato tk nai');
        return;
    }
    const currnetTotalAmount =newWithdrawAmount + newWithdrawTotalAmount;
    withdrawAmountTotal.innerText = currnetTotalAmount;

    const currentTotalBaalnce = newTotalBalance - newWithdrawAmount;
    totalBalance.innerText = currentTotalBaalnce;




})