import jwt from "jsonwebtoken";

export async function getToken() {
  try {
    const payload = { ...data };
    const token = jwt.sign(payload, process.env.ADMIN_TOKEN, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.error(error);
  }
}


export async function verifyToken() {
    try {
        const verify = jwt.verify(token,process.env.ADMIN_TOKEN,(err)=>{
            if (err) {
                console.error(err)
            }
        })
        return verify
    } catch (error) {
        console.error(error)
    }
}