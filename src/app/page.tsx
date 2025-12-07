import { createClient } from "../utils/supabase/browserClient";

export default async function Home() {
  const supabase = createClient ()
  const {data, error} = await supabase.from('books')
                                      .select('id, slug, title, writers("name")' )
                                       .order("created_at", {ascending: false})

  console.log ('data:' + data , 'error' + error?.message)
  return (
    <div className="w-80 mx-auto">
      Hi world!
      {data && data.map(({id, slug, title, writers })=> (<div key={id}>{title} By: {writers.name}</div>))}
    </div>
  );
}
