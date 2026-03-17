import { getAll, getOne } from "../CRUD/mongoDB.js";
import { comparePass } from "../utils/bcrypt.js";
import { verifyToken } from "../utils/token.js";

const collecName = "users";
export async function checkUserTypeAdmin(req, res, next) {
    console.log(req.body)
  try {
    const { userType } = req.body;
    if (userType === "admin") {
      res.status(401).json({
        ErrMsg: "User-type should by Admin ",
      });
    } else {
      return next();
    }
  } catch (error) {
    console.error("checkUserTypeAdmin:",error.message);
    res.status(500).json(error.message);
  }
}

export async function verifyValidToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const result = await verifyToken(token);

    console.log("result:", result);
    if (result) {
      req.user = result;
      return next();
    }
    res.status(400).json({ ErrMsg: "Token Not Valid" });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
}

export async function verifyUsernameAndPass(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(401).json({ ErrMsg: "username or password missing" });
    }
    const verifyPassAndUser = await getOne(collecName, username);
    if (!verifyPassAndUser) {
      return res.status(401).json({ ErrMsg: "verify pass and user failed" });
    }
    const compared = await comparePass(password, verifyPassAndUser.password);
    if (!compared) {
      return res.status(401).json({ ErrMsg: "compared failed" });
    }

    req.dbUser = verifyPassAndUser;
    next();
  } catch (error) {
    console.error("from verifyUsernameAndPass", error.message);
    res
      .status(500)
      .json({ ErrMsg: "from verifyUsernameAndPass server failed" });
  }
}
