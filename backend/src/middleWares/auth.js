// export async function checkCurrectUserType(req, res, next) {
//   try {
//     const { user_type } = req.body;
//     if (
//       user_type !== "admin" ||
//       user_type !== "air force" ||
//       user_type !== "intelligence corps"
//     ) {
//       res
//         .status(401)
//         .json({
//           ErrMsg:
//             "User-type should by Admin or Air force or Intelligence corps",
//         });
//     } else {
//       return next();
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json(error.message);
//   }
// }

import { verifyToken } from "../utils/token.js";

export async function verifyValidToken(req, res, next) {
  try {
    const  token  = req.headers.authorization.split(" ")[1];
    const result = await verifyToken(token);
    console.log("result:",result)
    if (result) {
      return next();
    }
    res.status(400).json({ ErrMsg: "Token Not Valid" });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
}
