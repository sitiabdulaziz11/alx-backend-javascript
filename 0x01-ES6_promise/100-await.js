import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const pht = await uploadPhoto();
    const user = await createUser();
    result = { pht, user };
  } catch (err) {
    result = { pht: null, user: null };
  }
  return result;
}