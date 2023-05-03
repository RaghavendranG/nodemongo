import { client } from "../DB/db.js";

import { ObjectId } from "../DB/db.js";

export function getStudentsALL(req) {
  return client.db("guvi").collection("students").find(req.query).toArray();
}

export function getStudentByParams(id) {
  return client
    .db("guvi")
    .collection("students")
    .find({ _id: new ObjectId(id) })
    .toArray();
}

export function createStudent(data) {
  return client.db("guvi").collection("students").insertOne(data);
}

export function createStudentMany(data) {
  return client.db("guvi").collection("students").insertMany(data);
}

export function editStudent(id, data) {
  return client
    .db("guvi")
    .collection("students")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export function deleteStudents(id) {
  return client
    .db("guvi")
    .collection("students")
    .deleteOne({ _id: new ObjectId(id) });
}
