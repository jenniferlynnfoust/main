let pwGenerateEl = document.querySelector(".pw-generate-el");
let pwOutputEl = document.querySelector(".pw-output-el");
// default length
let length = 14;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //52
const numbers = '0123456789'; //10
const specChars = '!@#$%^&*()'; //10                
// pick from 1-26, 27-52, 53-62, 63-72
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

function generatePW() {
    let pw = '';
    let pwDisplays = [];

    // enter length of pw
    let pwLengthEl = document.getElementById("pw-length-el").value;
    // if nothing is entered, default 14 length - this is a little hacky, i know. still figuring out default values. value="14" in the html input didn't work
    if (pwLengthEl === "") {
        length = 14;
    }
    else {
        length = pwLengthEl;
    }
    // create random string based on chosen characters
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * 71) + 1;
        pw += chars[randomNum];    
    }
    pwOutputEl.textContent = pw;
}


    // next fill all 4 buttons 
    // set min and max length
    // set complexity rules
    // 1 click copy pw to clipboard



    // fill output buttons - will this be another array? append? array with buttons[0,1,2,3]

    //-----------------------// 
    // button[0] | button[1] //
    //-----------------------//
    // button[2] | button[3] //
    //-----------------------//

    // choose from letters, numbers, specChars... 
    // or choose from 1-26, 27-52, 53-62, 63-72
    // let letters = 
    // let numbers = 
    // let specChars = 
