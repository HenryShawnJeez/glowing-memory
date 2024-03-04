import { prisma } from "@/lib/prismadb";

export default async function getMembershipForms() {
    
    try {
        const membershipForms = await prisma.membershipForm.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        return membershipForms   
    }

    catch(error: any){
        console.error(error)
        throw error
    }
}