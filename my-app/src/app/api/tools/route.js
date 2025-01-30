import dbConnect from "@/lib/dbConnect";
import AiTool from "@/models/aiTools";
import { NextResponse } from "next/server";

// GET all tools & POST new tool
export async function GET() {
  await dbConnect();
  try {
    const tools = await AiTool.find({});
    return NextResponse.json(tools, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch AI Tools" }, { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const data = await req.json();
    const newTool = await AiTool.create(data);
    return NextResponse.json(newTool, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create AI Tool" }, { status: 400 });
  }
}
