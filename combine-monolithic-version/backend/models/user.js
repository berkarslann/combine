import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    // required:true
  },
  password: {
    type: String,
    // required:true,
  },
  name: {
    type: String,
    // required: true
  },
  surname: {
    type: String,
    // required: true
  },
  title: {
    type: String,
  },
  projects: [
    {
      project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
      selectedRoles: [
        {
          type: String,
        },
      ],
    },
  ],

  mains: {
    type: String,
  },
  level: {
    type: String,
  },
  leadership: {
    type: String,
  },
  projectDedicate: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
