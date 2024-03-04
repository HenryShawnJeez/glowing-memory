import getMembershipForms from "@/app/actions/getMembership";
//Import Needed Components
import MembershipFormsCollection from "@/components/AdminComponents/MembershipFormsCollection";

export const revalidate = 1

const page = async () => {

    const membershipForms  = await getMembershipForms()
    //console.log({membershipForms})

    return ( 
        <main className="px-4 py-6 lg:px-10">
            <MembershipFormsCollection forms={membershipForms}/>
        </main>
     );
}
 
export default page;