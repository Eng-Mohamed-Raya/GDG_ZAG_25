//** ============================== Assignment 1 ==============================

    // function sayHello(theName, theGender) {
    //     theGender? theGender=theGender.toLowerCase():theGender;
    //   switch(theGender){
    //     case "male":
    //         console.log(`Hello Mr ${theName}`);
    //         break
    //     case "female":
    //         console.log(`Hello Miss ${theName}`);
    //         break;
    //     default :
    //     console.log(`Hello ${theName}`);
            
    //   }
    // }

    // // Needed Output
    // sayHello("Osama", "Male"); // "Hello Mr Osama"
    // sayHello("Eman", "Female"); // "Hello Miss Eman"
    // sayHello("Sameh"); // "Hello Sameh"

//** ============================== Assignment 2 ==============================

    // function calculate(firstNum, secondNum, operation) {
    // if(secondNum===undefined){
    //     console.log("Second Number Not Found");
    // }else if(firstNum===undefined){
    //     console.log("First Number Not Found");
    // }else{
    //     switch(operation){
    //         case 'add' :
    //             console.log(firstNum+secondNum);
    //             break;
    //         case 'subtract' :
    //             console.log(firstNum-secondNum);
    //             break;
    //         case 'multiply' :
    //             console.log(firstNum*secondNum);
    //             break;
    //         default:
    //             console.log(firstNum+secondNum);
    //             break;
                
    //     }
    // }
    // }

    // // Needed Output
    // calculate(20); // Second Number Not Found
    // calculate(20, 30); // 50
    // calculate(20, 30, 'add'); // 50
    // calculate(20, 30, 'subtract'); // -10
    // calculate(20, 30, 'multiply'); // 600

//** ============================== Assignment 3 ==============================


function ageInTime(theAge) {
  if(theAge>10 && theAge<100){
    var months=theAge*12;
    var days=theAge*365;
    var weeks=days/7;
    var hours=days*24;
    var min=hours*60;
    var sec=min*60;
    
    console.log(`${months} Months`);
    console.log(`${weeks} Weeks`);
    console.log(`${days} Days`);
    console.log(`${hours} Hours`);
    console.log(`${min} Minutes`);
    console.log(`${sec} Seconds`);
    
  }else{
    console.log(' Age Out Of Range');
    
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(1); // Age Out Of Range
ageInTime(20); // Months Example => 456 Months