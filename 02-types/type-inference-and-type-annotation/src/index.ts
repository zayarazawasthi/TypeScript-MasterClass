
// Here typescript finds the type of the vairable itself and this is called "Type inference"
const name = "john";
const age = 30;


//Here types are explicitly defined and this is called "Type annotation"
const address: string = "bengaluru";


// for function 

//syntax:
//1. functin FunctionName(variable: variableType){

// }
function greet(name: string){
    //your code goes here
}

// 2.function FunctionName(variable1:variableType, variable2:variableType....):returnVariableType{
// }

function Add(a: number, b:number):number {
    return a + b;
}

const scores: number[] = [10,20,30]


//for objects(infers types in the following case)
const user = {
    name:"john",
    age:30,
    isAdmin:false
}

//contexual typing
//contexual typing is a form of type inference.
// The type of an expression is evaluated or implied by the location or the sorrounding context.


// -> Regular inference happens from Right to left
//Regular Inference: Right->Left
//Example:
const user1 = {
    name:"John",
    age:30,
    isAdmin:false
}
//Here the type of name is inferred by typescript and name is inferred as string, since value of name is enclosed in double quote and same for other variables as well.


//->Type Annotation happens from left to right
//Type annotation: Left->Right
//Example:
document.addEventListener('click',(event)=>{
    console.log(event.button)
})

//Heret he type of 'event' is not declared but that does not create problem.
//this is because it infers from left to right highlighting document has an eventlistener which has a type click.
//Whenever we talk about click event, we talk about mouse enabled event, thus it knows particular event type.



//Example:
const userX = ['Alice','Bob','charlie'];
userX.forEach(user=>{
    console.log(user.toUpperCase());
})

//Here userX has type and user does not have explicit type. user itself is constrained to take string as type because user is part of userX.



//In summary
//Annotation: Developer -> tells the type to -> Typescript
//Inference: Typescript -> tells the type to -> Developer