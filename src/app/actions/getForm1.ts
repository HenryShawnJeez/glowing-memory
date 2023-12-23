import { prisma } from "@/lib/prismadb";

export default async function getForms() {
    try {
        const firstForm = await prisma.firstForm.findMany()
        return firstForm
        
    }catch(error: any){
        console.error(error)
        throw error
    }
}