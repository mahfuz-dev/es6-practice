class Parent{
    constructor(){
        this.fatherName = "Rahman";
    }
}
class Child extends Parent{
    constructor(childName){
        super();
        this.name = childName;
    }
    //using function/method
    getFullName(){
        return this.name +" " + this.fatherName; 
    }
}
const child = new Child("Mahfuzur");
const child2 = new Child("Farjana");
const child3 = new Child("Radwan");
const child4 = new Child("Rayhan");

console.log(child,child2,child3,child4);

//call the function/method
console.log(child.getFullName());
console.log(child2.getFullName());
console.log(child3.getFullName());
console.log(child4.getFullName());