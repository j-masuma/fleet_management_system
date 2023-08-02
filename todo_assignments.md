const array =[
{
name:'sakina',
salary:30000.
year_of_experience:1

    },
     {
      name:'jahan',
      salary:300000.
      year_of_experience:5

    },
     {
      name:'ali',
      salary:3000000.
      year_of_experience:7

    }

]

write a function which caculate yearly salary increaments :

function ( employees, conditions){

//write a code

}

conditions:
1 : if employee has les then one year then no increament
2: if greater then 3 (in between 1 to 3) year then 10% increament ( get salary and increase 10% in salary )
3: above 3 year of expereience 20%

result return the modified array :

array javascript :

      => array  map , filter , find  ,some , reduce  workout

      time complexity , space complexity

<!-- // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
let array =[
{
name:'sakina',
salary:30000,
year_of_experience:1
    },
    {
      name:'Ahmad',
      salary:300000,
      year_of_experience:3
    },
     {
      name:'jahan',
      salary:300000,
      year_of_experience:5
    },
     {
      name:'ali',
      salary:3000000,
      year_of_experience:7
    }
]
console.log(array);
//Using Map
array =array.map((arr)=>{
    if(arr.year_of_experience<=1){
        return arr;
    }
    else if(arr.year_of_experience>1 && arr.year_of_experience<=3){
        const inc=0.01*arr.salary;
        arr.salary=arr.salary+inc;
    }
    else{
        const inc=0.02*arr.salary;
        arr.salary=inc+arr.salary;
    }
    return arr;
});
console.log("Using Map");
console.log(array);
//Using Reduce
array=array.reduce((acc,curr)=> {
    if(curr.year_of_experience<=1){
        acc.push(curr);

    }else if(curr.year_of_experience>1 && curr.year_of_experience<=3){
        const inc=0.01*curr.salary;
        curr.salary=curr.salary+inc;
        acc.push(curr)
    }    else{
        const inc=0.02*curr.salary;
        curr.salary=inc+curr.salary;
        acc.push(curr)
    }
    return acc;
},[]);
console.log("Using Reduce");
console.log(array);


const array = [15, 16, 17, 18, 19,9,10,8,7];
const re=[1,1,1,1,1,1]
//find method
const find=array.find(num=> num<10)
console.log(`Num less then 10 is  :${find}`);

//reduce methoed
const reduce = re.reduce((acc,curr)=>acc*curr);
console.log(`Sum=== ${reduce}`);

const some=array.some(num=>num>100);
console.log(`is there num>100?  ${some}`);

const red=array.reduce((acc,cur) => {

},[]);


spread, rest operator, destructuring objects
validation libraries
 -->
