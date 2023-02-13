document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-field');
    const depositAmountString = depositAmount.value;
    const newDepositAmount = parseFloat(depositAmountString);

    depositAmount.value = '';
    
    if(isNaN(newDepositAmount)){
        alert('please provied a valid number')
        return;
    }

    const depositAmountTotal =document.getElementById('deposit-amount');
    const depositAmountTotalString =depositAmountTotal.innerText;
    const newDepositTotalAmount =parseFloat(depositAmountTotalString);

    const currentDepositTotalAmount = newDepositAmount + newDepositTotalAmount;
    depositAmountTotal.innerText = currentDepositTotalAmount;

    const totalBalance =document.getElementById('total-balance');
    const totalBalanceString =totalBalance.innerText;
    const newTotalBalance = parseFloat(totalBalanceString);

    const currentTotalBaalnce = newDepositAmount + newTotalBalance;
    totalBalance.innerText = currentTotalBaalnce;


    




})