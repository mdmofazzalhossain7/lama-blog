import { Post } from "@/models/Post";
import connect from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();

    const post = await Post.find();

    return new NextResponse(post);
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};
