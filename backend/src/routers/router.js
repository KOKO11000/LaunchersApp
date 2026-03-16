import express from "express";
import { addNew, deleteOne, findOneById, getAll } from "../CRUD/mongoDB.js";
import {
  addNewLauncher,
  findLauncherById,
  getAllDataEndpoint,
} from "../ctrls/launchers.js";

const router = express.Router();

// GET
// GET /api/launchers/id - אחד משגר משיג
// מוסיף משגר למסד הנתונים - launchers/api/ POST
// הוסיפו יכולת למחוק משגר באמצעות Route חדש:
// id/:launchers/api/ DELETE - מוחק משגר ממסד הנתונים על פי id - חברו את הפעולה לכפתור
// בצד הלקוח

// id ●
// city ●
// rocketType ●
// latitude - number ●
// longitude - number ●
// name ●
const collectName = "launchers";

router.get("/launchers", getAllDataEndpoint);

router.get("/launchers/id", findLauncherById);

router.post("/launchers", addNewLauncher);

router.delete("/launchers/:id", async (req, res) => {
  try {
    const  {id}  = req.params;
    const deleteLauncher = await deleteOne(collectName, id);
    if (!deleteLauncher) {
      return res.status(401).json({ ErrMsg: "Launcher not found" });
    }
    res.json({ msg: "launcher deleted Successful!!!" });
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ ErrMsg: "Srever Failed!" });
  }
});
export default router;
