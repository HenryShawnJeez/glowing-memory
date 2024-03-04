import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    fullName,
    city,
    country,
    email,
    mobileNumber,
    occupation,
    dateOfBirth,
    gender,
  } = body;
  if (
    !fullName ||
    !city ||
    !country ||
    !email ||
    !mobileNumber ||
    !occupation ||
    !dateOfBirth ||
    !gender
  ) {
    return new NextResponse("Missing Fields", { status: 400 });
  }
  const newMembershipForm = await prisma.membershipForm.create({
    data: {
      fullName,
      city,
      country,
      email,
      mobileNumber,
      occupation,
      dateOfBirth,
      gender,
    },
  });
  return NextResponse.json(newMembershipForm);
}
