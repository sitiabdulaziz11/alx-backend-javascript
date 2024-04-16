export default function getStudentIdsSum(listOfStud) {
  return listOfStud.reduce((sum, ids) => sum + ids.id, 0);
}
