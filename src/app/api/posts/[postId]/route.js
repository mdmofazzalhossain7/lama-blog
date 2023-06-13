import { Post } from "@/models/Post";
import connect from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connect();

    const post = await Post.findById(params.postId);

    if (!post) throw new Error("Post not found", { status: 404 });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Server error", { status: 500 });
  }
};
