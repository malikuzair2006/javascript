

//let i = 0;
//for(let val of items){
    //console.log(`value at index ${i} = ${val}`);
    //let offer =val / 10;
   // items[i] = items[i] - offer;
   // console.log(`value after offer = ${items[i]}`);
   // i++;
//}
/*function countVowels(str)  {
   let count = 0;
   for(const char of str) {
  if(char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u")
     count++;
   }
   return count;
}
const countVow = (str) =>{
    let count = 0;
    for(const char of str) {
   if(char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u")
      count++;
    }
    return count;
}*/
/*let arr =["abbottabad", "karachi", "islamabad"];
arr.forEach((val, idx, arr) =>{
   console.log(val. toUpperCase(), idx ,arr);
})*/
//pritice set
/*let nums = [1,2,3,4,5,6,7];

let newArr = nums.map((val) =>{
   return val;
});
console.log(newArr);


let calcSquare = (nums) =>{
   console.log(nums*nums);*/
   //filter
   /*let  arr = [1,2,3,4,5,6,7,8,9];
   let evenArr = arr.filter((val) =>{
      return val % 2=== 0;
   })
   console.log(evenArr);*/
   //reduce
   /*let arr =[1,2,3,4];

   const output = arr.reduce ((res, curr)=>{
      return res > curr? res : curr;
   });
   console.log(output);*/

   //pritice set
 /*let marks = [78,98,90,67,99,34,56];
 let toppers = marks.filter ((val)=>{
   return val  >  90;
 });
 console.log(toppers);*/

 //question 2
 let n =prompt("enter anumber :");
let arr =[];
 for(let i = 1;i <= n;i++){
   arr[i-1] = i;
 }
 console.log(arr);
 let sum = arr.reduce((res, curr)=>{
   return res + curr;
 });
 console.log("sum =",sum);
 let factorial = arr.reduce((res, curr)=>{
   return res * curr;
 });
 console.log("factorial =",factorial);