import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    storedUserEmail,
    storedChosenETH,
    storedChosenIOVBalance,
    storedConnectedAddress,
    storedTransactionID,
  } = body;
  if (
    !storedUserEmail ||
    !storedChosenETH ||
    !storedChosenIOVBalance ||
    !storedConnectedAddress ||
    !storedTransactionID
  ) {
    return new NextResponse("Missing Fields", { status: 400 });
  }
  const newDeposit = await prisma.depositForm.create({
    data: {
      email: storedUserEmail,
      chosenETH: storedChosenETH,
      chosenIOVBalance: storedChosenIOVBalance,
      connectedAddress: storedConnectedAddress,
      transactionID: storedTransactionID,
    },
  });
  return NextResponse.json(newDeposit);
}
