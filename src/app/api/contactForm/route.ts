import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      telPhone,
      message,
    } = body;
    if (
      !email ||
      !lastName ||
      !firstName ||
      !telPhone ||
      !message
    ) {
      return new NextResponse("Missing Fields", { status: 400 });
    }
    const newContactForm = await prisma.contactForm.create({
      data: {
        email,
        firstName,
        lastName,
        phone: telPhone,
        message
      },
    });
    return NextResponse.json(newContactForm)
  }
  