function getInputValueById(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueString = inputField.value;
    const value = parseFloat(inputValueString);
    if(isNaN(value)){
        inputField.value = '';
        alert('plese enter a number');
        return;
    }
    inputField.value = '';
    return value;
}

function getTextElementById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setElementById(elementId, newValue){
    if(isNaN(newValue)){
        return;
    }
    const textElement =  document.getElementById(elementId);
    textElement.innerText = newValue;
}