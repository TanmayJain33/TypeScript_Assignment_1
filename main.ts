export {}
let message = 'Welcome Back';
console.log(message);

let x=10;
const y=20;

let sum;
const title = 'Application';

//Boolean Data Type
let isBeginner:boolean = true;

//Number Data Type
let number:number = 10;

//String Data Type
let name:string = 'Tanmay';

//Template String
let sentence:string = `My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);

//Null Data Type
let n:null = null;
let num1:number = null;
let myName:string = null;
let isDone:boolean = null;

//Undefined Data Type
let u:undefined = undefined;
let num2:number = undefined;
let myAddress:string = undefined;
let isProgress:boolean = undefined;

//Arrays
let list1:number[] = [1,2,3,4,5];
let list2:Array<number> = [6,7,8,9,10];

//Tuple
let person1:[string,number] = ['Tanmay', 22];

//Enum
enum Color{Red, Green, Blue};
let c:Color = Color.Blue;
console.log(c);

//Any Type
let randomValue:any = 10;
randomValue = true;
randomValue = 'Tanmay';

//Type Inference
//No Type Inference in below case
let a;
a=10;
a=true;
//Type Inference in below case
/*let b=20;
b=true;*/

//Union of Types
let multiType:number | boolean;
multiType = 10;
multiType = true;

//Functions
//Here num3 is an optional parameter
function add(num1:number, num2:number, num3?:number){
   return num1+num2;
}
console.log(add(5,10));
//Here num2 is a default parameter
function sub(num1:number, num2:number = 10){
   return num1-num2;
}
console.log(sub(50,25));
console.log(sub(50));
//Here num2 is a rest parameter
function mul(num1:number, ...num2:number[]){
   let result = num1;
   for(let i=0; i<num2.length; i++){
      result = result * num2[i];
   }
   return result;
}
console.log(mul(2, 4, 6, 8, 10));

//Interfaces
//Object Type
function personA(person:{firstName: string, lastName: string}){
   console.log(`${person.firstName} ${person.lastName}`)
}
let p1 = {
   firstName: 'Tanmay',
   lastName: 'Jain'
};
personA(p1);
//Interface Type
interface Person {
   firstName: string;
   lastName: string;
}
function personB(person: Person){
   console.log(`${person.firstName} ${person.lastName}`)
}
let p2 = {
   firstName: 'Bruce',
   lastName: 'Wayne'
};
personB(p2);

//Classes
class Employee{
   public employeeName: String;   //Public Access Modifier
   private employeeAge: number;   //Private Access Modifier
   constructor(name: String, age: number){
      this.employeeName = name;
      this.employeeAge = age;
   }
   greet(){
      console.log(`Good Morning ${this.employeeName}`);
   }
}
let emp1 = new Employee('Tanmay', 22);
emp1.greet();
//Inheritance
class Manager extends Employee{
   constructor(managerName: String, managerAge: number){
      super(managerName, managerAge);
   }
   delegateWork(){
      console.log('Manager delegating tasks');
   }
}
let m1 = new Manager('Bruce', 30);
m1.greet();
m1.delegateWork();
//console.log(m1.employeeAge);  //employeeAge is private so not accessible