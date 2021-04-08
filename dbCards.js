import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

// Collection name
export default mongoose.model("Cards", cardSchema);
