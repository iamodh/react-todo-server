const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const TodoSchema = new mongoose.Schema(
  {
    task: String,
    done: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

// increment되는 id라는 field를 자동으로 추가해 줌
TodoSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Todo", TodoSchema);
