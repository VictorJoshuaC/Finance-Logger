"use strict";
//crated an event listener tio get the forms values
// and display them in a console log
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toForm = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.value);
});
