//num 4


let colors =["red","black","white"]
 for(let c of colors){
     console.log(c)

 }

 let colors2 = colors[Symbol.iterator] ()
 
let colors3= ["pink","green","blue"]

 
 for(let c of colors3){
console.log(c)

 }



 //num 2

 class shape {
     static count =0;
    
     constructor (shape1,shape2)
     
     {
         shape.fun();
        
         this.sh1 = sh1;
         this.sh2 = sh2;
     }

    static fun(){
        this.count++;
    }
    display(){
        console.log(this.area,this.para)
    }
}

 class rectangle extends shape{
     constructor (area,para)
     {
         super(sh1,sh2,area,para)
        this.area = area;
        this.para = para;
     }
     Area(area,para){
         return area * para
    }
 Para(area,para){
     return area + para *2
     console.log(Para)
 }

 }

 







// num3
// function*f1(x){
//     let z1 =0 ,z2 =1 , next
//     for (let m =1; m<= x ; m++)
//     {
//         next = z1 + z2;
//         z1 = z2;
//         z2 = next ;
//         yield next ;
//         x++;
//     }

// }
// let n;
// let f2 =f1(n)
// for(let fbro2 of f2)
// {
//     console.log(fbro2)
// }







//num1

let prop;

let obj = {
    userName: "Youssef",
    address: "Aswan",
    age: 10
}
let handler = {
    set (obj,prop,value){
        if(!isNaN(value)){
            throw('Please, Enter Your Name Stringly');
        }
        let max = 7 ;
        if(value<max){
            throw('Please, Your name must not be more than 7 ');
        }
        obj[prop]=value;
        console.log(handler)
    }
    
}


if(prop=== "adrress"){
    if(!lisNaN(value)){
        throw('address only string value');
    }
    obj[prop]=value;

}

if(prop=== "age"){
    if(!isFinite(value)){
        throw('age not int');
    }
    if(value > 25 && value > 60){
        throw('the age invalid');
    }
    
    obj[prop]=value;
};























