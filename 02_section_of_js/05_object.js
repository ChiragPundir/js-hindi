const course ={
    courseName :"Js",
    price:"999",
    courseInstructor:"Chirag"
}
// we are doing destruction of objects
const {courseInstructor} = course // We can use courseInstructor inspite of course.courseInstuctor and we can easily access the courseInstructor's value

console.log(courseInstructor)

const {courseInstructor:Ins} = course // Ins is a name which is given to courseInstructor for making code simple 
console.log(Ins)



