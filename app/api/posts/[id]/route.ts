import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json(bbsDetailData);
}