import {Invoice} from "./classes/invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter"; 



//crated an event listener tio get the forms values
// and display them in a console log

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


const ul = document.querySelector('ul')!;

const list = new ListTemplate(ul);


// getting and displaying details from user input to console and Ui

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string,string,number];
    values = [toFrom.value, details.value, amount.valueAsNumber]


    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
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

const addUID = <T extends {name: string}> (obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yogi', age: 40});

console.log(docOne);

// with interface
interface Resource {
    uid: number;
    resourceName: string;
    data: object;
}


const docThree: Resource = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
}



console.log(docThree);



