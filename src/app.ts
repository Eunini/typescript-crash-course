import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { Formatter } from './interfaces/Formatter.js';
//interfaces
// interface isPerson{
//   name: string;
//   age:number;
//   speak(a: string):void;
//   spend(a: number):number;
// }

// const myself : isPerson = {
//    name:"euny",
//    age: 19,
//    speak(text: string):void {
//        console.log(text)
//    },
//    spend(amount: number):number {
//     console.log(amount);
//     return amount;
// },
// }
//   const invOne = new Invoice('mario', 'work on the mario website', 250);
//   const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
  
//   let invoices: Invoice[] = [];
//   invoices.push(invOne)
//   invoices.push(invTwo);
  
//   invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
//   })
  
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: Formatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value, 'end');
});

// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tuple: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tuple[0] = 'ken';

let student: [string, number];
//student = [236325, 'Inioluwa'];
student = ['chun-li', 23564];


//Generics in TSC
// const addUID = <T extends {name: string}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// let doc = addUID({name: "euny", age: 19});
// console.log(doc.age)

// interface Resource<T>{
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const sample: Resource<object> = {
//   uid: 1, 
//   resourceName: "Eunice",
//   data: {name: "Louis"}
// }