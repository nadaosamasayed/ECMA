//five

let map = new Map();
map.set("nada",{Coursename:"JavaScript", Grade:"Excellent"})
map.set("noor",{Coursename:"Jquery", Grade:"Good"})
map.set("lotchia",{Coursename:"React", Grade:"v.Good"})
map.set("courseName",["JavaScript","Jquery","React","ESNext","NodeJS"])
map.set("grade",["Excellent","Good","V.Good"]);
console.log(map.get());





















//four
let country = new Set(["Egypt","USA","UK"]);
country.add("Russia","Egypt")

console.log(country);


country = ["Egypt","USA","UK"];
let ct = ["Russia","Spain"];
let ct2= [...country,"NADA",...ct];

let country2= [].slice.call(country)



Set.prototype.intersection=function(countries2)
{
    let newSet=new Set();
    for(let nada of countries2)
    {
        if(!this.has(nada))
        {
            newSet.add(nada)
        }
    }
    return newSet;
}
let b;
let x1=new Set(["Egypt","USA","UK"]);
let x2=new Set(["Egypt","USA","UK","Russia","Spain"]);

console.log(x1.intersection(x2))





//3
let x =
    x_name="nada",
    fac_name="Education",
    fac_grade= "90%"

console.log("name is " + x_name+"  ")
//console.log(`studentName is $ {x_name} fac_name => $ {fac_name}  fac_grade => $ {fac_grade}`)



//2


function main(...rest){
    let min = Math.min(...rest)
    let max;
    Math.max(...rest)
    let Arr = [max,min]
    return Arr;

}
let main2 = main(10,20,80,70,90)

console.log(`max is => $ {main2[0]} , min is => $ {main2[1]}`)


















//1



let me = "Nada";
let me2 = "Osama";
[me,me2] = [me2,me]

console.log("me:",me);
console.log("me2:",me2)