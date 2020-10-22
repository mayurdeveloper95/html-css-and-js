/* FizzBuzz
*/


/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and
    not 3), print "Buzz" instead. 

*/


 //option1
let num;
let result;
for(num=1;num <=100;num++)
{
if(num % 3 == 0 && num % 5 == 0)
{

    result="FizzBuzz";   
    console.log(num); 
}
else if(num % 3 == 0)
{
    result="Fizz";   
    console.log(num); 
}
else if (num % 5 == 0)
{
    result="Buzz";   
    console.log(num); 
}
console.log(result);
}


/*
//option2

for (num=1;num <=100;num=num+1)
{
    var result="";
    if(num % 3 == 0)
    {
        result=result + "FIZZ";
    }

    if(num % 5 == 0)
    {
        result=result + "BUZZ";
    }
    let data=result || num;
    console.log(data);
}

*/
