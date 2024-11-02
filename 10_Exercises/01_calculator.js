/* create a faulty calculator using js
this calculator takes 2 nos as input from user
performs wrong operations

+ -->-
*---> +
- --> /
/ --> **
performs wrong operation 10% of the times

using math.random()
10% of the time, the if (randomChance < 0.1) condition will be true, and the calculator will perform a faulty operation.
The remaining 90% of the time, the condition will be false, and the calculator will execute the correct operation.

*/

function faultycalculator(num1,num2,operation){
    const randomnumber= Math.random();
    if(randomnumber<0.1){
        switch (operation) {
            case '+':
                return num1 - num2;
            
            case '-':
                return num1 / num2;
            
            case '*':
                return num1 + num2;
            
            case '/':
                return num1 ** num2;
            default:
                console.log("Enter a valid operation");
        }
    }
        
        
        else{
              switch (operation) {
                case '+':
                    return num1 + num2;
                
                case '-':
                    return num1 - num2;
                
                case '*':
                    return num1 * num2;
                
                case '/':
                    return num1 / num2;
                default:
                    console.log("Enter a valid operation");

        }
    }
}
              
       const num1= parseFloat(prompt("enter first number:"));
       const num2=parseFloat(prompt("enter second number"));
       const operation=prompt("enter the operation you want:")
       const result=faultycalculator(num1,num2,operation);
       console.log(`The answer is: ${result}`);



