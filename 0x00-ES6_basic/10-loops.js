export default function appendToEachArrayValue(array, appendString) {
  const arrays = [];
  for (const element of array) {
    arrays.push(appendString + element);
  }
  return arrays;
}
