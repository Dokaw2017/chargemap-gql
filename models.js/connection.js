import mongoose from "mongoose";

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  Quntitiy: Number,
  ConnectionTypeID: [{ type: mongoose.Types.ObjectId, ref: connectiontypes }],
  CurrentTypeID: [{ type: mongoose.Types.ObjectId, ref: currenttypes }],
  LevelID: [{ type: mongoose.Types.ObjectId, ref: levels }],
});

export default mongoose.model("connections", connectionSchema);
