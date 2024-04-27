import ClassRoom from './0-classroom';

export default function initializeRooms() {
  /* function to initialize room
  * it returns array of 3 ClassRoom objects with the
  * sizes 19, 20, and 34 (in this order).
  */
 
  const array = [19, 20, 34];
  // const array2 = array.map((item) => ({_maxStudentsSize: item}));
  const array2 = array.map((item) => new ClassRoom(item));
  return array2;
}
