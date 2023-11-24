import { Invoice } from "./classes/invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
//crated an event listener tio get the forms values
// and display them in a console log
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// getting and displaying details from user input to console and Ui
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
// const invOne = new invoice('mario', 'work on the arm', 590);
// console.log(invOne.client,
//     invOne.amount,
//     invOne.format()
// );
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yogi', age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
console.log(docThree);
