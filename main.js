


let inpName = document.querySelector('.inpName');
let inpAgrmnt = document.querySelector('.inpAgrmnt');
let btn = document.querySelector('.btn');
let warning = document.querySelector('.warning');


inpName.addEventListener('focus', () => {
    inpName.value = "";
});

let run = (event) => {
    if (inpName.value === "" || inpName.value === "Ener your name") {
        inpName.value = "NoName";
    }
    let warngMsg = 'Dear ' + inpName.value + ' You must agree to the terms' + '<br>' + '<br>';
    if (inpAgrmnt.checked === false) {
        warning.innerHTML = warngMsg;
    }
    else {
        warning.innerHTML = '';
    }
    event.preventDefault();
}

btn.addEventListener("click", run);