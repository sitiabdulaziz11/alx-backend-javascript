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

  const val = fltrloc .map((item) => {
    const machgd = newGrade.find((item2) => item2.studentId === item.id)
    return {
        id: item.id,
        firstName: item.firstName,
        location: item.location,
        grade: machgd ? machgd.grade : 'N/A',
    };
    
    }) 

    return val;
}
/*my code
export default function updateStudentGradeByCity(listOfStud, city, newGrade) {
    const fltrloc = listOfStud.filter((item) => item.location === city);
    const val = fltrloc.map((item) => ({id: item.id,
        firstName: item.firstName,
        location: item.location,
        grade: (newGrade.filter((item) => item.studentId === item.id ))|| 'N/A'
    }) )
    return val;
}*/