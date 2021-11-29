"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Application';
//Boolean Data Type
var isBeginner = true;
//Number Data Type
var number = 10;
//String Data Type
var name = 'Tanmay';
//Template String
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
//Null Data Type
var n = null;
var num1 = null;
var myName = null;
var isDone = null;
//Undefined Data Type
var u = undefined;
var num2 = undefined;
var myAddress = undefined;
var isProgress = undefined;
//Arrays
var list1 = [1, 2, 3, 4, 5];
var list2 = [6, 7, 8, 9, 10];
//Tuple
var person1 = ['Tanmay', 22];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
//Any Type
var randomValue = 10;
randomValue = true;
randomValue = 'Tanmay';
//Type Inference
//No Type Inference in below case
var a;
a = 10;
a = true;
//Type Inference in below case
/*let b=20;
b=true;*/
//Union of Types
var multiType;
multiType = 10;
multiType = true;
//Functions
//Here num3 is an optional parameter
function add(num1, num2, num3) {
    return num1 + num2;
}
console.log(add(5, 10));
//Here num2 is a default parameter
function sub(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 - num2;
}
console.log(sub(50, 25));
console.log(sub(50));
//Here num2 is a rest parameter
function mul(num1) {
    var num2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num2[_i - 1] = arguments[_i];
    }
    var result = num1;
    for (var i = 0; i < num2.length; i++) {
        result = result * num2[i];
    }
    return result;
}
console.log(mul(2, 4, 6, 8, 10));
//Interfaces
//Object Type
function personA(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p1 = {
    firstName: 'Tanmay',
    lastName: 'Jain'
};
personA(p1);
function personB(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p2 = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
personB(p2);
//Classes
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.employeeName = name;
        this.employeeAge = age;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Tanmay', 22);
emp1.greet();
//Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, managerAge) {
        return _super.call(this, managerName, managerAge) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce', 30);
m1.greet();
m1.delegateWork();
//console.log(m1.employeeAge);  //employeeAge is private so not accessible
