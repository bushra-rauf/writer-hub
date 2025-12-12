import { getSingleBook } from "@/utils/supabase/queries"

const SingleBook = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params
    const { data, error } = await getSingleBook(slug)

    if (!data){
        return error ? (
            <p className="text-red-400">Error: {error.message}</p>)
            : <p>No Book Found</p>
    }
    return (
        <>
    {data &&
     <div className="w-80 mx-auto border-2 p-4 rounded mt-4">
        <h1 className="font-extrabold text-2xl">{data.title}</h1>
        <div className="text-right italic"> By: {data.content}</div>
        <p className="mt-4">{data.description}</p>
        <div className="font-bold mt-4">Price: ${data.price}</div>
    </div>
    } </>

    )
}

export default SingleBook