import { NextResponse, NextRequest } from "next/server";
import pool from "../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    pool.query(`INSERT INTO blogs (contents) VALUES (${req.body})`);
  } catch (error: any) {
    return new NextResponse(error.code);
  }
}
