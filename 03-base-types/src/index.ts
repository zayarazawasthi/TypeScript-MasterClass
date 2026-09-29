//string
let firstname : string = "Tapas" ; //double quotes
let message: string = 'hello';  // single quote
let greeting: string = `Welcome` //bakctick


//with string datatype we can invoke string methods
console.log(message.toUpperCase())


//number(number represents all the int, float , decimal all types in one called number)
let count : number = 10;
let price: number = 999.99;
let temperature: number = -5;
let score: number = 99.5;


//boolean
let isAdmin : boolean = true;
let hasPermission :boolean = false;

//string vs String
// -> string: represents primitive type value
// -> String : is javascript wrapper object
// -> Always try to use "string" for type annotation


//if we're to create new String object, we use String
// let name1: String = new String("Alice")


//null and undefined(represnt the absence or lack of the value)
let result : null = null;
let vlaue  :undefined = undefined;

//strictNullChecks = true(by default)
//strictNullChecks says null and undefined are two different values

// let username : string = 'Alice';
// username = null;

//this gives error, because we have defined username to be the type of string and now we are replacing username with type null,
//this can be avoided by using StrictNullChecks = true in tsconfig.json


// question: can a variable have null and string type?
// -> yes, by using unions

//Example:
let username1 : string | null = 'Alice';
username1 = 'tapascript'

function getSavedUser(){
    return "hello" ;
}
//if your type states that something could be null, typescript literally blcoks you from interacting with it until you proved that it is not null.
//Example:
let username2: string | null = getSavedUser();//suppose some where getSavedUser() function is defined and assume it might return null;
username2.toUpperCase();


//if getSavedUser does not return a string, then we cannot use usename2 with string methods, because username2 is not string, it is null

//we can use optional chaining or if else statement to get rid of it
//username2?.toUppercase()
//if the type comes out to be string , it uppercases the string otherwise it returns username2.


//undefined(when value is missing)
const users = ["A","B"];
const user = users.find(user=> user === "C");
console.log(user);//undefined


//bigint
const hugeNumber : bigint = 89471794987373737n;


//symbol(primitive values designed to be unique)
const id1 = Symbol("id1");
const id2 = Symbol("id2")
// console.log(id1 === id2); //false



//The special types: Any, unknown, void, never

//Any(use any when you dont want typescript to check the type of value)
let someValue :any = "hello"; // though double quote, not a string because of any
someValue.toUpperCase();
someValue.notArealMethod();//doesnot give an error on nowhere defined notArealMothod();
someValue.foo.bar.helllo.nothing//doesnot give error

//type inference also does not work in any


//unknown (much safer option for "any" type)
// unlike any, unknown checks the type of variable before you interact with others using this variable
//example:
 let dynamicValue : unknown = "hello world";
//  dynamicValue.toUpperCase(); //gives error, because unknow checks the type of "dynamicValue" and it is not string


//void (when fucntion doesnot have any return value)
function logMessage(message : string) : void {
    console.log(message)
}


//neverr
//function returns never, if it completly breaks the execution flow or it does not return an undefined or void, it just fails through oa exception. In these case, you will be using never.
//example

function keepAlive(): never {
    while(true) {
        console.log("HeartBeat....")
    }
}


//if used void instead of never, the while(true) statement could run forever since while is a loop and to break the execution flow we use never.
