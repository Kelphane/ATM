"use strict";

const pin = 1234;
let balance = 1000;

//Pin Related Functions/////////////

//Returns Pin Number:
function getPin(){
    return pin;
}

//Balance Related Functions/////////

//Returns Account Balance:
function getBalance(){
    return balance;
}

//Receives an Input Number and Adds it to Balance:
function setBalance(number){
    balance += number;
}

//EXPORTS/////////////////