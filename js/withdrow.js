document.getElementById('withdrow-btn').addEventListener('click',function(){
    const newWithDrowValue = getInputValueById('withdrow-field');
    const previousWithdrowTotal = getTextElementById('withdrow-total');
    const newWithDrowTotal = previousWithdrowTotal + newWithDrowValue;
    setElementById('withdrow-total', newWithDrowTotal);

    const previousBalanceTotal = getTextElementById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithDrowValue;
    setElementById('balance-total',newBalanceTotal);
})