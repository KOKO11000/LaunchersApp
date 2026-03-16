import { compare, hash } from "bcrypt";

export async function hashPass(password) {
  try {
    return await hash(password, 10);
  } catch (error) {
    console.error(error);
  }
}
export async function comparePass(originalPassword, hashPass) {
  try {
    return await compare(originalPassword, hashPass);
  } catch (error) {
    console.error(error);
  }
}
