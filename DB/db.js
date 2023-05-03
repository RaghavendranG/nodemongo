import { MongoClient } from "mongodb";

import Obj from "mongodb";

import dotenv from "dotenv";

dotenv.config();

const Mongo_URL = process.env.Mongo_URL;

async function createConnection() {
  const client = new MongoClient(Mongo_URL);
  await client.connect();
  console.log("MongoDB connection established successfully");
  return client;
}

export var ObjectId = Obj.ObjectId;
export const client = await createConnection();
