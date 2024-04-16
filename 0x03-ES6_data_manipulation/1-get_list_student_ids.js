export default function getListStudentIds(arrId) {
  if (!Array.isArray(arrId)) {
    return [];
  }
  return arrId.map((stud) => stud.id);
}
