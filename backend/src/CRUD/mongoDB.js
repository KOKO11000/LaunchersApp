import { ObjectId } from "mongodb";
import { connect } from "../data/mongodb.js";

const db = await connect();

export async function creatCollection(collectionName) {
  try {
    const result = await db.createCollection(collectionName);
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

export async function getAll(collectionName) {
  try {
    const result = await db.collection(collectionName).find().toArray();
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
export async function getOne(collectionName, username) {
  try {
    const result = await db.collection(collectionName).findOne({username});
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

export async function addNew(collectionName, data = {}) {
  try {
    const result = await db.collection(collectionName).insertOne(data);
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

export async function updateByID(collectionName, id, data = {}) {
  try {
    const result = await db
      .collection(collectionName)
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: data },
        { returnDocument: "after" },
      );
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

export async function findOneById(collectionName, id) {
  try {
    const result = await db
      .collection(collectionName)
      .findOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

export async function deleteOne(collectionName, id) {
  try {
    const result = await db
      .collection(collectionName)
      .deleteOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
