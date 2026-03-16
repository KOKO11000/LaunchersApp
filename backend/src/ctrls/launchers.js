import { addNew, deleteOne, findOneById, getAll } from "../CRUD/mongoDB.js";

const collectName = "launchers";

export async function getAllDataEndpoint(req, res) {
  try {
    const showAllCollection = await getAll(collectName);
    if (!showAllCollection)
      res.status(401).json({ ErrMsg: "can't show data now" });
    res.json(showAllCollection);
  } catch (error) {
    res.status(500).json({ ErrMsg: "Srever Failed!" });
  }
}

export async function addNewLauncher(req, res) {
  const { city, rocketType, iatitude, longitude, name } = req.body;

  if (!rocketType || !iatitude || !longitude || !name) {
    return res.status(401).json({
      ErrMsg:
        "rocketType, iatitude, longitude and name are obligation sure you enter them!!",
    });
  }
  if (typeof iatitude !== "number" || typeof longitude !== "number") {
    return res
      .status(401)
      .json({ ErrType: "Iatitude and Longitude Obligation type Number!!" });
  }
  const exsitingLauncher = await getAll(collectName);
  if (
    exsitingLauncher.rocketType === rocketType ||
    exsitingLauncher.name === name
  ) {
    return res.status(413).json({ ErrMsg: "RocketType or Name already exist" });
  }
  const newLauncher = {
    city,
    rocketType,
    iatitude,
    longitude,
    name,
    createdAt: new Date().toLocaleDateString(),
  };
  await addNew(collectName, newLauncher);
  res.status(201).json({ msg: "New Launcher created Successful!!!" });
  try {
  } catch (error) {
    res.status(500).json({ ErrMsg: "Srever Failed!" });
  }
}

export async function findLauncherById(req, res) {
  const { id } = req.params;
  const getOneLauncher = await findOneById(collectName, id);
  res.json(getOneLauncher);
  try {
  } catch (error) {
    res.status(500).json({ ErrMsg: "Srever Failed!" });
  }
}

export async function deleteOneById(req, res) {
  try {
    const { id } = req.params;
    const deleteLauncher = await deleteOne(collectName, id);
    if (!deleteLauncher) {
      return res.status(401).json({ ErrMsg: "Launcher not found" });
    }
    res.json({ msg: "launcher deleted Successful!!!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ ErrMsg: "Srever Failed!" });
  }
}
