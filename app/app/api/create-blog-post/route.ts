import { NextResponse, NextRequest } from "next/server";
import pool from "../../../lib/db";

export async function POST(req: NextRequest) {
  console.log(`here`);
  try {
    //TODO: sql injection?
    const data = await req.json();

    console.log(`req body: ${data.blog}`);

    const query = {
      text: "INSERT INTO blogs(contents) VALUES($1)",
      values: [data.blog],
    };
    const res = await pool.query(query);
    console.log(res);
    return new NextResponse("200 OK");
  } catch (error: any) {
    return new NextResponse(error.code);
  }
}
