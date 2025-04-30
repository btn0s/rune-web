import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

const BLOB_KEY = "likes-count";

// Get current likes count
export async function GET() {
  try {
    const { blobs } = await list({ prefix: BLOB_KEY });
    const blob = blobs[0];
    if (!blob) {
      // Initialize with 0 if no data exists
      await put(BLOB_KEY, JSON.stringify({ count: 0 }), {
        contentType: "application/json",
        access: "public",
        allowOverwrite: true,
      });
      return NextResponse.json({ count: 0 });
    }
    const response = await fetch(blob.url);
    const text = await response.text();
    return NextResponse.json(JSON.parse(text));
  } catch (error) {
    console.error("Error reading likes:", error);
    return NextResponse.json({ count: 0 });
  }
}

// Toggle likes count
export async function POST() {
  try {
    const { blobs } = await list({ prefix: BLOB_KEY });
    const blob = blobs[0];
    let count = 0;

    if (blob) {
      const response = await fetch(blob.url);
      const text = await response.text();
      const data = JSON.parse(text);
      count = data.count;
    }

    const newCount = count - 1 >= 0 ? count - 1 : count + 1;
    await put(BLOB_KEY, JSON.stringify({ count: newCount }), {
      contentType: "application/json",
      access: "public",
      allowOverwrite: true,
    });

    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error("Error updating likes:", error);
    return NextResponse.json(
      { error: `Failed to update likes: ${error}` },
      { status: 500 }
    );
  }
}
