import express from "express";
// import { hashPass } from "../utils/bcrypt.js";
import { getToken, verifyToken } from "../utils/token.js";
// import { checkCurrectUserType } from "../middleWares/auth.js";
import { addNew, deleteOne, getAll, updateByID } from "../CRUD/mongoDB.js";
import {
  createNewUser,
  deleteOneByIdEndpoint,
  updateOne,
} from "../ctrls/auth.js";
import { verifyValidToken } from "../middleWares/auth.js";
const routerA = express.Router();
const collecName = "users";
// id ●
// username ●
// password ●
// email ●
// user_type ●
// last_login ●

routerA.post("/register/create", createNewUser);
routerA.put("/register/update", verifyValidToken, updateOne);
routerA.delete("/register/delete/:id", verifyValidToken, deleteOneByIdEndpoint);

routerA.post("/login", verifyValidToken, async (req, res) => {
  try {
    const { username, password } = req.body;
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});
routerA.get("/getUser", async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});
routerA.get("/register", async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

export default routerA;
