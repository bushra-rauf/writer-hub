import HomeBooks from "@/components/HomeBooks";
import { getHomeBooks } from "@/utils/supabase/queries";


export default async function Home() {
  const {data, error} = await getHomeBooks()

  console.log ('data:' + data , 'error' + error?.message)
  return (
    <div className="w-80 mx-auto">
       <HomeBooks books={data!}/>
    </div>
  );
}
