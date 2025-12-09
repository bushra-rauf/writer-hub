import Image from "next/image"
import Link from "next/link"
const Logo = () => {
    return(
        <div className="flex items-center gap-4">
            <Link href = "/">          
            <Image src="/logo2.png" alt= 'logo' width="40" height="40"></Image>
            </Link>
            <h1 className="font-bold text-2xl text-white hover:bg-linear-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text" >Writer<span className="text-amber-600 ">Hub</span></h1>
        </div> 
    )
}

export default Logo 