import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  date: String,
  email: String,
  status: String,
  salary: Number,
});

const Users = models.user || model("user", userSchema);
export default Users;
