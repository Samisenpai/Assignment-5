function convertToNum(id){
    let stringValue = document.getElementById(id).innerText;
    let convertedValue = parseInt(stringValue);
    return convertedValue;
}

function disableBtn(id){
    let button = document.getElementById(id);
    let disabledBtn = button.disabled;
    return disabledBtn;
}

