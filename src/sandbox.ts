
 const grate = (a:number, b:number, c?: number | string )=>{
    console.log(a + b);
    console.log(c);    
}
console.log('testing');

grate(9,1,99)

// project aliases
type StringOrnum = string | number;
type obj = { name: string, uid: StringOrnum};

const log = ( uid: StringOrnum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}


const greetAgain = (user: obj) => {
    console.log(`${user.name} says hello`);  
}
const infor : obj = {name:"Ryder", uid: 85999996 }

log('0u9yl', 'bag');
greetAgain(infor);



//function signatures
// eg 1

let gate: (a: string, b: string) => void;
gate = (name: string, gateIn: string) => {
    console.log(`${name} says ${gateIn}`);
} 


// eg 2

let calc: (a: number, b: number, c: string) => number;
 
calc = (one: number, two:number , action: string)=> {
    if (action === 'four') {
        return one + two
        
    } else {
       return one - two 
    }
}







