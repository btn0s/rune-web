import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const LIKES_FILE = path.join(process.cwd(), "data", "likes.json");

// Initialize likes file if it doesn't exist
async function initializeLikesFile() {
  try {
    await fs.access(LIKES_FILE);
  } catch {
    await fs.mkdir(path.dirname(LIKES_FILE), { recursive: true });
    await fs.writeFile(LIKES_FILE, JSON.stringify({ count: 0 }));
  }
}

// Get current likes count
export async function GET() {
  await initializeLikesFile();

  try {
    const data = await fs.readFile(LIKES_FILE, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ count: 0 });
  }
}

// Toggle likes count
export async function POST() {
  await initializeLikesFile();

  try {
    const data = await fs.readFile(LIKES_FILE, "utf8");
    const { count } = JSON.parse(data);
    const newCount = count - 1 >= 0 ? count - 1 : count + 1;

    await fs.writeFile(LIKES_FILE, JSON.stringify({ count: newCount }));
    return NextResponse.json({ count: newCount });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update likes" },
      { status: 500 }
    );
  }
}
