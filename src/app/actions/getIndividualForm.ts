import { prisma } from "@/lib/prismadb";

export default async function getIndividualForm(id: string) {
  try {
    const formDetail = await prisma.firstForm.findMany({
      where: {
        id: id,
      },
    });

    return formDetail;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
