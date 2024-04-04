const mongoose = require("mongoose");

// mongodb+srv://anilcodes01:anilcodes01@cluster0.kbsq56y.mongodb.net/Todos

mongoose.connect(
  " mongodb+srv://anilcodes01:anilcodes01@cluster0.kbsq56y.mongodb.net/Todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
