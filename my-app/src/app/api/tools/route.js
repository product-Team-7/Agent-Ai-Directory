import dbConnect from "@/lib/dbConnect";
import AiTool from "@/models/aiTools";
import { NextResponse } from "next/server";


export async function GET(req) {
  await dbConnect();

  try {
    // Extract query parameters for pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1; // Default page: 1
    const limit = parseInt(searchParams.get("limit")) || 10; // Default limit: 10
    const skip = (page - 1) * limit;

    // Fetch tools with pagination
    const tools = await AiTool.find().skip(skip).limit(limit);
    const total = await AiTool.countDocuments();

    return NextResponse.json({
    //   total,
    //   page,
    //   limit,
      tools
    }, { status: 200 });

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
