import { prisma } from "@/lib/prismadb";

export default async function getContactForms() {
    try {
        const contactForms = await prisma.contactForm.findMany()
        return contactForms
        
    }catch(error: any){
        console.error(error)
        throw error
    }
}