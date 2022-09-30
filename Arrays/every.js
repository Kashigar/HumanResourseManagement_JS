var array=[2,4,6,8,20,30,40,50]



console.log(array.every((ele) => {  // It will check the condition , if all the elements are > than 2 
return ele >2                       // Then only it returns true else returns false and it will print 
}))                                 // all the elements as in the array
console.log(array);

// output:false
// [
//    2,  4,  6,  8,
//   20, 30, 40, 50 
// ]