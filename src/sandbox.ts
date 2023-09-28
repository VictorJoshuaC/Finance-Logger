
 const grate = (a:number, b:number, c?: number | string )=>{
    console.log(a + b);
    console.log(c);    
}
console.log('testing');

grate(9,1,)

// project aliases
type StringOrnum = string | number;
type obj = { name: string, uid: StringOrnum};

const log = ( uid: StringOrnum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetAgain = (user: obj) => {
    console.log(`${user.name} says hello`);j    
}



