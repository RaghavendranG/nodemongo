import express from "express";

import {
  createStudent,
  createStudentMany,
  deleteStudents,
  editStudent,
  getStudentByParams,
  getStudentsALL,
} from "../Controllers/student.js";

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  const studentsDetails = await getStudentsALL(req);

  res.status(200).json({data : studentsDetails});
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const studentsDetails = await getStudentByParams(id);

  res.status(200).json({data : studentsDetails});
});

router.post("/", async (req, res) => {
  const newStudent = req.body;

  const result = await createStudent(newStudent);

  res.status(201).json({data : result});
});

router.post("/many", async (req, res) => {
  const newStudents = req.body;

  const result = await createStudentMany(newStudents);

  res.status(201).json({data : result});
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const updatedStudent = req.body;

  const result = await editStudent(id, updatedStudent);

  res.status(200).json({data : result});
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteStudent = await deleteStudents(id);

  res.status(200).json({data : deleteStudent});
});

export const studentRouter = router;
