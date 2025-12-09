import { menuItems} from "@/Data/data"
import Link from "next/link"

const NavItems = () => {
    return(
            <div className="hidden md:flex items-center gap-8">
               {(menuItems).map((item) => (<Link key={item.path} href={item.path} className="relative text-white cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-300
                               after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                               after:h-[2px] after:w-0 after:bg-orange-400
                               hover:after:w-full after:transition-all after:duration-400">{item.name}</Link>))}
            </div>
    )
}

export default NavItems