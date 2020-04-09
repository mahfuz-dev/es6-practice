//if any value is not defined
    // function add(num1,num2){
    //     if(num2 == undefined){
    //         num2 = 0;
    //     }
    //     return num1 + num2;
    // }

//another way
    // function add(num1,num2){
    //     num2 = num2 || 0;
    //     return num1 + num2;
    // }

 //in es6
    function add(num1,num2 = 0){
        return num1 + num2;
    }

 
const total1 = add(10);
console.log(total1);
 
const total2 = add(10,20);
console.log(total2);
