var course=new Object()
{
    course.name="Java script"
    course.fees="free",
    course.trainer="Rekha_Maam",
    course.topics=["translators","functions","memoryexecution"]
    course.hours= function(){return 8}
}

var timings=new Object()
{
    timings.morning="9.30 am"
    timings.evening="6 pm"
}
course.session="afternoon"      // add extra property to object
delete c.fees                  // delete property from object
console.log(course);            // prints whole course object
console.log(timings)            // prints whole timings object 