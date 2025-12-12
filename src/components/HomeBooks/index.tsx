import { HomeBooksType } from "@/utils/supabase/queries"
import Link from "next/link"

const HomeBooks = ({books}: {books: HomeBooksType}) => {
    return (
        <div>
           {books && books.map(({id, slug, title, writers })=> (
            <Link key={id} href={`/${slug}`}><div className="block border-1 rounded p-4 mt-4">
                <h2 className="font-extrabold text-xl">{title}</h2>
                <div className="text-right"> By: {writers.name}</div>
                </div>
            </Link>))}
        </div>
    )
}

export default HomeBooks