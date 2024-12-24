import { redirect } from "next/dist/server/api-utils";
import { createClient } from "../../utils/supabase/server";

export default async function Home() {
    const supabase = await createClient()

    const { data, error: authError } = await supabase.auth.getUser()
    console.log(data);

    if (authError || !data?.user) {
        redirect('/login')
    }

    const { data:mahasiswa, error:fetchError } = await supabase.from("mahasiswa").select('').order('id', { ascending: true });
    console.log(mahasiswa);

    if (fetchError) {
        console.log(fetchError);
    }
}