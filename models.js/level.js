import mongoose from "mongoose";

const Schema = mongoose.Schema;

const levelSchema = new Schema({
  Title: String,
  Comments: String,
  IsFastChargecapable: Boolean,
});

export default mongoose.model("level", levelSchema);
