/* Example 1 - Before object destrcture */

  let student = {
        "student_name" : "saravanan",
        "student_age"  : 5,
        "student_school":"dav matriculation",
        "student_location":"chennai"
  }

  const {student_name,student_age,student_school} = student

   console.log("student Name===>",student_name)
   console.log("student age===>",student_age)
   console.log("student school===>",student_school)

