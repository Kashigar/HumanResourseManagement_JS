var Array2=[100,50,10,5]

console.log(Array2.filter((element,index)=>{
    if(element>20){
        return element          //return 50,100 because are>20
    }
}))
console.log(Array2);  // original array