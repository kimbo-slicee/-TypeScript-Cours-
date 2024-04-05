/**
 * Any is note a type is a marker
 * we can use type any for eny type of variables in programme so why we have to specify the type of variables then ??
 * type Any or the key word any it s note the best practise in typescript and it s the default type in the language and type script genre any type for the variables has not  a type
 * bcs if I use an API Call and I want type a specific type like string then a get another like number the programme will give me an exception
 * and stopping the process but when I sue any the call and the resp will work without any problem and that s what make a logical errors
 * so if we want note using any we can add the flag not IsNotImplicit in the ts config to make your code more stable
* */
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;