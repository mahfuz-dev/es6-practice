const myUni = "MU";
console.log(myUni);

//not changeable
// myUni = "LU";
// console.log(myUni);

//array constant
    const numbers = [12,20];
    console.log(numbers);
//value can be updated for array
    numbers[2] = 30;
    console.log(numbers);
//new value can be added
    numbers.push(40);
    console.log(numbers);

//array type can't be changed
    // numbers = ["rony","tony"];
    // console.log(numbers);

//Let is for changing values
    let patientName = "Rahim";
    console.log(patientName);
    patientName = "Fatema";
    console.log(patientName);

//Let is a scope variable
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum =  sum + i;
        
    }
    //'i' cant' be shown out of the loop
    console.log(i);