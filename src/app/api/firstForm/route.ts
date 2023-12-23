import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    email,
    claimAmount,
    iovWalletAddress,
    wallet,
    membershipCard,
    ethereumAddress,
  } = body;
  if (
    !email ||
    !claimAmount ||
    !iovWalletAddress ||
    !wallet ||
    !ethereumAddress
  ) {
    return new NextResponse("Missing Fields", { status: 400 });
  }
  const newFirstForm = await prisma.firstForm.create({
    data: {
      email,
      payoutQuantity: claimAmount,
      iovWalletAddress: iovWalletAddress,
      iovClaimWallet: wallet,
      royalMemberShipCard: membershipCard,
      ethereumAddress,
    },
  });
  return NextResponse.json(newFirstForm)
}
