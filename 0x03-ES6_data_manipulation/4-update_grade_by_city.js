export default function updateStudentGradeByCity(listOfStud, city, newGrade) {
    /*const defgrade = {grade: 'N/A' };
    return listOfStud.filter((item) => item.location === city)
                     .map((item) => ({id: item.id,
                        firstName: item.firstName,
                        location: item.location,
                        grade: (newGrade
                        .filter((grade) => grade.studentId === item.id)
                    .pop() || defgrade).grade,}))*/
 
  const fltrloc = listOfStud.filter((item) => item.location === city);
  const val = fltrloc .map((item) => ({id: item.id,
                   firstName: item.firstName,
                   location: item.location,
                   grade: (newGrade.filter((item) => item.studentId === item.id ))|| 'N/A'
    }) )
    return val;
}
