import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  creator: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  postedTime: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teamSize: {
    type: Number,
  },
  languages: {
    type: [String],
  },
  roles: {
    type: [String],
  },
  openRoles: {
    type: [String],
  },
  leader: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      selectedRoles: [
        {
          type: String,
        },
      ],
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
