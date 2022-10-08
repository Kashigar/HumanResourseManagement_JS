async function synch()
{
    console.log("login to the application");
    var p=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("In progress")
            reject("Rejected")
        },3000)

    })
    await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
    console.log("One promise executed");

    var p=new Promise((resolve,reject)=>
    {
        resolve("Executed")
        reject("Rejected")

    },1000)

    await p.then((msg)=>console.log(msg)).catch((msg)=>console.log((msg)))
    console.log("Logout");
}
setTimeout
synch()