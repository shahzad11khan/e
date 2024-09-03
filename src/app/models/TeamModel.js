// Import mongoose
const mongoose = require("mongoose");

// Define the user schema
const teamSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  designation: {
    type: String,
    trim: true,
  },

  image: {
    type: String,
    required: false,
  },
  LinkedIn: {
    type: String,
    trim: true,
  },
  Github: {
    type: String,
    trim: true,
  },
});

// Create a model from the schema
const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

// Export the model
export default Team;
