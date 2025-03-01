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


// real date time 

let currentDate = new Date();
document.getElementById("current-date").innerText = currentDate.toDateString();


    let realTime = new Date();

    let hours = realTime.getHours();
    let minutes = realTime.getMinutes();

    let time = `${hours}:${minutes}`;


