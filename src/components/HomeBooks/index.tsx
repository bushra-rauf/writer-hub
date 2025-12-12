"use client"
import { getHomeBooks, HomeBooksType } from "@/utils/supabase/queries"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

const HomeBooks = ({books}: {books: HomeBooksType}) => {
    const {data} = useQuery({
        queryKey:["home-books"],
        queryFn: async() => {
            const {data,error} = await getHomeBooks()
            if(error) throw error 
            return data
        },
        initialData: books,
        refetchOnMount: false,
        staleTime: 10000 * 10
    })
    return (
        <div>
           {data && data.map(({id, slug, title, writers })=> (
            <Link key={id} href={`/${slug}`}><div className="block border-1 max-w-2xl m-auto rounded p-4 mt-4">
                <h2 className="font-extrabold text-xl">{title}</h2>
                <div className="text-right"> By: {writers.name}</div>
                </div>
            </Link>))}
        </div>
    )
}

export default HomeBooks