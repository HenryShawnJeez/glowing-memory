import { prisma } from "@/lib/prismadb";

export default async function getDepositForms() {
    try {
        const depositForms = await prisma.depositForm.findMany()
        return depositForms
        
    }catch(error: any){
        console.error(error)
        throw error
    }
}