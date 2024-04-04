// Write basic express boilerplate code,
// with express.json() middleware

const express = require("express");
const app = express();
import { createTodo, updateTodo } from "./types";

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs!",
    });
    return;
  }
  // Put it in mongodb
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs!",
    });
  }
});
