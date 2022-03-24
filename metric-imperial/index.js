let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass   = document.getElementById("mass");

function lengthConversion(input){
    //1 meter = 3.28084 feet 
    //1 foot = 0.3048 meters
    let feet = (input * 3.28084).toFixed(3);
    let meters = (input * 0.3048).toFixed(3);
    length.innerHTML = 
    input + " meters = " + feet + " feet | " + input + " feet = " + meters + " meters"
}
function volumeConversion(input){
    //1 liter = 0.264172 gallons
    //1 gallon = 3.78541 liters
    let liters = (input*0.264172).toFixed(3);
    let gallons = (input*3.78541).toFixed(3);
    volume.innerHTML = 
    input + " liters = " + liters + " gallons | " + input + " gallons = " + gallons + " liters"
}
function massConversion(input){
    //1 kg = 2.20462 pounds
    //1 pound = 0.453592 kg
    let kilograms = (input*2.20462).toFixed(3);
    let pounds = (input*0.453592).toFixed(3);
    mass.innerHTML = 
    input + " kilograms = " + kilograms + " pounds | " + input + " pounds = " + pounds + " kilograms"
}

// pressing enter submits conversion
function keyListener(event) {
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;
    if (key === 'Enter' || key === 'NumpadEnter' || key === 13) {
        convert();
    }
}
document.addEventListener('keyup', keyListener);

function convert(){
    let input = document.getElementById("inputNum").value;

    lengthConversion(input);
    volumeConversion(input);
    massConversion(input);
}


// save for future reference
// // Execute a function when the user releases a key on the keyboard
// // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// let pressEnter = document.getElementById("inputNum");
// pressEnter.addEventListener("keyup", function(event) {
//     if (event.code === "Enter") {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       document.getElementById("convert").click(); // this click doesn't work for some reason...
//     }
//   }); 
