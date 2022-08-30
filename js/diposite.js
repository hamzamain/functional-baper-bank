document.getElementById('diposite-btn').addEventListener('click',function(){
    const newDipositeValue = getInputValueById('diposite-field');
    const previousDipositeTotal = getTextElementById('diposite-total');
    const newDipositeTotal = previousDipositeTotal + newDipositeValue;
    setElementById('diposite-total',newDipositeTotal);

    const previousBalanceTotal = getTextElementById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDipositeValue;
    setElementById('balance-total', newBalanceTotal);
})