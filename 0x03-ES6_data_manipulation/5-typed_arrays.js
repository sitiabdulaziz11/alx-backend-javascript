export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new DataView(new ArrayBuffer(length), 0, length);

  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;
  return buffer;
}
