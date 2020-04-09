//strings
    const firstName = "Mahfuzur";
    const lastName = "Rahman";

//with normal JS-
    const fullName1 = firstName + " " + lastName + " " + "is a good boy";
    console.log(fullName1);



//within ES6 templates within the line math also can be added
    const fullName3 = `${firstName} ${lastName} has ${(10+20)*2} tk only`;
    console.log(fullName3);

//multiline with normal JS
    const multiline1 = "Life is good\n"
    + "We want to live\n"
    +"If Allah allows us";
    console.log(multiline1);

//multiline with ES6 template
    const multiline2 = `Life is good
We want to live
If Allah allows us`;
    console.log(multiline2);    