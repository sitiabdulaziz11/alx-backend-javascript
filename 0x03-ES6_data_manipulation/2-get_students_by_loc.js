export default function getStudentsByLocation(listOfStud, city) {
  return listOfStud.filter((value) => value.location === city);
}
