let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

//searching when PROG200 course start
function findCourseStartDate(arrayElement){
    let foundCourseDate;
    if (arrayElement.CourseId == "PROG200") {
        foundCourseDate = arrayElement.StartDate;
    }
    return foundCourseDate;
}
console.log("-------------------------------------------------------------------")

console.log("The title of the PROJ500 course is:")
let courseStartDate = courses.find(findCourseStartDate);
console.log(`Start date of:${courseStartDate.CourseId} is ${courseStartDate.StartDate}`);

//find the title for PROJ500
// function findCourseTitle(arrayElement){
//     let foundCourseTitle;
//     if(arrayElement.CourseId == "PROJ500"){
//         foundCourseTitle = arrayElement.Title;
//     }
//     return foundCourseTitle
// }
// let courseTitleFound = courses.find(findCourseTitle);
// console.log(courseTitleFound.Title);

console.log(courseStartDate.Title);
//titles of courses thats 50 or less
// function findCourseThats50OrLess(arrayElement){
   
//     if(arrayElement.Fee <= 50){
//        return true;
//     }
//      return false;
   
// }

console.log("-------------------------------------------------------------------")
console.log("Titles of courses that cost $50 or less:")
function findCourseThats50OrLess(arrayElement){
    return (arrayElement.Fee <= 50);
}
let foundCourse50AndUnder = courses.filter(findCourseThats50OrLess);
//loop through results to show titles...  because foundCourse50AndUnder is an array with many values
for(let i = 0; i < foundCourse50AndUnder.length; i++ ){
    console.log(foundCourse50AndUnder[i].Title);
}


console.log("-------------------------------------------------------------------")
console.log("classes that meet in classroom1:")


function getClassesThatMeetInRoom1(arrayElement){
    return (arrayElement.Location == "Classroom 1")
}

let founClassesOfRoom1 = courses.filter(getClassesThatMeetInRoom1);
//console.log(founClassesOfRoom1);
for(let i = 0; i < founClassesOfRoom1.length; i++){
    console.log(founClassesOfRoom1[i].CourseId);
}



