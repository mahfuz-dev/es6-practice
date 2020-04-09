
const age = [10,12,14,16];
const age2 = [18,20,22,24];
const age3 = [26,28,30];

//concatenate multiple arrays:concat()    
    const allAges = age.concat(age2).concat([7]).concat(age3);
    console.log(allAges);
    
//concatenate multiple arrays
    const allAges2 = [age, age2, 5, age3];
    console.log(allAges2); //it brings arrays separately

//concatenate multiple arrays:spread operator(...)
    const allAges3 =  [...age, ...age2, 5, ...age3]; //before variable
    console.log(allAges3);

//find max value
    const rahim = 100;
    const karim = 300;
    const jaber = 90;
    
    const maximum = Math.max(rahim, karim, jaber);
    console.log(maximum);

//find max value in array:spread operator(...)
    const tk = [200,500,300,100,250];
    
    const maxTk = Math.max(...tk);
    console.log(maxTk);

