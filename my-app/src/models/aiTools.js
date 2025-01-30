import mongoose from "mongoose";

const AiToolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    industry: { type: String, required: true },
    accessModel: { type: String, required: true, enum: ["open source", "close source", "API"] },
    pricingModel: { type: String, required: true, enum: ["Free", "Paid", "Freemium"] },
    websiteUrl: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    github: { type: String },
    tagline: { type: String },
    discription: {type : String },
    keyFeatures: { type: [String], default: [] },
    useCases: { type: [String], default: [] },
    logo: { type: String },
    thumbnailImage: { type: String },
    videoUrl: { type: String },
    promotion : {type : Boolean, default : false}
  },
  { timestamps: true }
);

export default mongoose.models.AiTool || mongoose.model("AiTool", AiToolSchema);
