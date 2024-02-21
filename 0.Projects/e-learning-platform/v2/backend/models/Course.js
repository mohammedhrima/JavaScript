const mongoose = require("mongoose");
const CourseSchema = mongoose.Schema(
  {
    fulltitle: {
      type: String,
      required: [true, "Full title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    videos: [
      {
        public_id: {
          type: String,
        },
        title: {
          type: String,
          required: [true, "title for video is required"],
        },
        link: {
          type: String,
          required: [true, "video is required"],
        },
      },
    ],
    price: {
      type: Number,
      required: [true, "price is required"],
    },
  },
  { minimize: false }
);

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
