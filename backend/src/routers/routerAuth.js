import express from "express";
// import { hashPass } from "../utils/bcrypt.js";
import { getToken, verifyToken } from "../utils/token.js";
// import { checkCurrectUserType } from "../middleWares/auth.js";
import { addNew, deleteOne, getAll, updateByID } from "../CRUD/mongoDB.js";
import {
  createNewUser,
  deleteOneByIdEndpoint,
  loginUser,
  updateOne,
} from "../ctrls/auth.js";
import {
  checkUserTypeAdmin,
  verifyUsernameAndPass,
  verifyValidToken,
} from "../middleWares/auth.js";
import { comparePass } from "../utils/bcrypt.js";

const routerA = express.Router();

const collecName = "users";

routerA.post(
  "/register/create",
  verifyValidToken,
  checkUserTypeAdmin,
  createNewUser,
);
routerA.put("/register/update", verifyValidToken, updateOne);
routerA.delete("/register/delete/:id", verifyValidToken, deleteOneByIdEndpoint);

routerA.post("/login", verifyUsernameAndPass, loginUser);


routerA.get("/getUser", async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

export default routerA;
