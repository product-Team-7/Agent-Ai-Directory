import dbConnect from "@/lib/dbConnect";
import AiTool from "@/models/aiTools"; // Ensure correct case in filename
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const {category} = await params
    const tools = await AiTool.find({ category });
    if (!tools.length) {
      return NextResponse.json({ error: "No tools found in this category" }, { status: 404 });
    }
    return NextResponse.json(tools, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tools" }, { status: 500 });
  }
}
