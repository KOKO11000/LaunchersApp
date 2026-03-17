import { addNew, deleteOne, getAll, updateByID } from "../CRUD/mongoDB.js";
import { hashPass } from "../utils/bcrypt.js";
import { getToken } from "../utils/token.js";
const collecName = "users";
export async function createNewUser(req, res) {
  try {
    const { username, password, email, user_type } = req.body;
    if (!username || !password || !user_type) {
      res
        .status(401)
        .json({ ErrMsg: "password or Username or user_type are missing!!!" });
    }

    const hashPassword = await hashPass(password);
    if (!hashPassword) res.status(401).json("Hash Password not Success!");

    const userTypeExists = await getAll(collecName);
    userTypeExists.find((e) => {
      if (e.user_type === user_type) {
        return res.status(409).json({ msg: "Usre type already exists" });
      }
    });

    const newUser = {
      username,
      password: hashPassword,
      email: email || "email@example.com",
      user_type,
      last_login: new Date().toLocaleDateString(),
    };

    const addToDB = await addNew(collecName, newUser);
    if (!addToDB) res.status(401).json({ ErrMsg: "Not Add to DB" });
    res.status(201).json({ msg: "SUCCESS!!", newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
}

export async function updateOne(req, res) {
  try {
    const { _id, ...data } = req.body;

    // const userTypeExists = await getAll(collecName);
    // userTypeExists.find((e) => {
    //   if (e.user_type === data.user_type) {
    //     return res.status(413).json({ msg: "User_type already exists" });
    //   }
    // }); //need to fix this: if I do update I can Update user_type how much I want  to what I want
    const update = await updateByID(collecName, _id, data);
    res.status(202).json({ msg: "Updated: ", update });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
}

export async function deleteOneByIdEndpoint(req, res) {
  try {
    const id = req.params.id;
    const deleted = await deleteOne(collecName, id);

    res.json({ msg: "DELETED Successfully!", deleted });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
}

export async function loginUser(req, res) {
  try {
    const { username } = req.body;

    const token = await getToken({ username, user_type: req.dbUser.user_type });
    if (!token) res.status(401).json({ ErrMsg: "Not get Token" });
    const last_login = new Date()
    res.json({ token,last_login, msg: "Logining..." });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
}
