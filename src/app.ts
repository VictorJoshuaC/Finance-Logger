//crated an event listener tio get the forms values
// and display them in a console log

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toForm.value,
        details.value,
        amount.value
    );
});