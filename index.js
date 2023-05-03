import express from "express";
// const express = require("express");

// const { MongoClient } = require("mongodb");

// const ObjectId = require("mongodb").ObjectId;

import dotenv from "dotenv";

import { studentRouter } from "./Router/student.js";

import cors from "cors"

dotenv.config();

const app = express();

app.use(cors())

const PORT = process.env.PORT;

app.use("/students", studentRouter);

// app.use(express.json())

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
