// create an animal class , the calls will have name, age, color, legs, properties and 
//create different methods


//create a dog and cat child class from the Animal class


class Animal
{
constructor(name,age,color,legs)
{
this.name=name;
this.age=age;
this.color=color;
this.legs=legs;
this.speed=140;
this.birds="it is a bird";
this.animal="it is a animal";
}
animalRun()
{
let sp=this.speed;
return sp;
}
animalfly()
{
    let le=this.legs;
    if (le < 4)
    {
        return this.birds;
    }
    else{
        return this.animal;
    }
}
}


class dog extends Animal
{
   dogBark()
   {
    console.log("bhow bhow");
   }
}

class cat extends Animal
{
   catMeow()
   {
console.log("meow meow");
   }
}


let a=new Animal("tiger",50,"yellow","4");
console.log(a);
console.log(`Animal name is: ${a.name}\n ${a.name} age is: ${a.age}\n ${a.name} color is: ${a.color}\n ${a.name} has ${a.legs} legs`);
console.log(`${a.name} has speed of `,a.animalRun());
let a2=new Animal("Sparrow",45,"white","2");
console.log(a2.animalfly());

let d=new dog();
console.log(d.animalfly());
console.log(d);


let c=new cat();
console.log(c.animalRun());
console.log(c);

d.dogBark();
c.catMeow();