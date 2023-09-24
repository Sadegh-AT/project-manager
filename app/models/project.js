const { default: mongoose } = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String, default: "/default/default.jpg" },
    tags: { type: Array, default: [] },
    owner: { type: [mongoose.Types.ObjectId], required: true },
    team: { type: [mongoose.Types.ObjectId] },
    private: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = {
  ProjectModel,
};
