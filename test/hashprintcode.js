/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######



//using repeat js function

for (let num=0; num<=7; num=num+1)
{
    console.log("#".repeat(num));
}
*/
/*
// using for loop

let x,y;

for(x=7;x>=1;x--)
{
    let result="";
    for(y=x;y<=7;y++)
    {   
        result = result + "#";
        
    }
    console.log(result);
}

/*

//best easy code
for (let i="*"; i.length < 8;i=i+"*")
console.log(i);
//document.write(i +"\n", "</br>");
*/