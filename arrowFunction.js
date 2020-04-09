//function declaration
    // function doubleIt(num){
    //     return num * 2;
    // }
    
    // const result = doubleIt(20);
    // console.log(result);

//function expression
    // const doubleIt = function(num){
    //     return null * 2;
    // }
   
    // const result = doubleIt(20);
    // console.log(result);

//ES6 arrow function:single-parameter
    const doubleIt = num => num *2;
    
    const result = doubleIt(20);
    console.log(result);

//ES6 arrow function:multi-parameter
    const add = (num1,num2,num3) => num1+num2+num3;
    
    const addResult = add(10,20,30);
    console.log(addResult);

//ES6 arrow function:blank-parameter(return value)
    const returnVal = () => 5;

    const fullVal = returnVal();
    console.log(fullVal);

//ES6 arrow function:multi-tasks-in-function
    const doMath = (x,y) => {
        const sum = x + y;
        const subtract = x - y;
        const result = sum * subtract;
        return result;
    }

    const resultMath =  doMath(10,5);
    console.log(resultMath);