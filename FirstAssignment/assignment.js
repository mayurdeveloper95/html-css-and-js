/*
* 1. declare an array variable name itCompanies and assign initial values Facebook,Google,Microsoft,Apple,
     IBM, Oracle, & Amazon
* 2. sort the array using sort() method
* 3. reverse the array without using reverse method
* 4. iterate the array ['HTML','CSS','JAVASCRIPT'] using for loop and print the items;
* 5. write the code which gives grade students according to theires scores:
        80-100 = A;
        70-89 = B;
        60-69 = C;
        50-59 = D;
        0-49 = F;
*/


const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
for(let i=0;i<itCompanies.length;i++)
{
    console.log(itCompanies[i]);
}



//2. sort

let st=itCompanies.sort();
console.log(st);



//3. reverse array

let newItCompanies=[]; 
for(let z=0; z<=6;z++)
{
    newItCompanies.push(st.pop());
}
console.log(newItCompanies);  


//revers array new option
let newItCompanies2=[]; 
for(let z=6; z>=0;z--)
{
    newItCompanies2.push(st[z]);
    console.log(newItCompanies2);  

}


//4. iterate array using for loop

const languages=["HTML","CSS","JAVASCRIPT"];
for(let i=0;i<languages.length;i++)
{
    console.log(languages[i]);
}



//5.code which gives grade students according to theires scores

function students(grade)
{
    if(grade>=80)
    {
        console.log("A Grade");
    }
    if(grade>=70 && grade<=89)
    {
        console.log("B Grade");
    }
    if(grade>=60 && grade <=69)
    {
        console.log("C Grade"); 
    }
    if(grade>=50 && grade<=59)   
    {
        console.log("D Grade");
    }       
    if(grade>=0 && grade<=49)
    {
        console.log("F Grade");  
    }  
        return grade;
}
let s=students(98);
let s1=students(84);


