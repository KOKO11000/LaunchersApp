import jwt from "jsonwebtoken";

export async function getToken(data) {
  try {
    const payload = { ...data };
    const token = jwt.sign(payload, process.env.ADMIN_TOKEN, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.error(error);
    return null
  }
}


export async function verifyToken(token) {
    try {
        const decoded = jwt.verify(token,process.env.ADMIN_TOKEN)
        return decoded
    } catch (error) {
        console.error("Err verufy token",error.message)
        return null
    }
}