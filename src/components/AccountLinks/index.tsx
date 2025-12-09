import Link from "next/link"
import NavItems from "../NavItems"
import MobileMenu from "../Mobile-Menu"

const AccountLinks = () => {

    return (
       <div className="flex items-center gap-4 sm:gap-2 md:gap-3">
        <NavItems/>
        
        <div className="flex items-center gap-2">
            <Link href="/auth/login" className="text-white rounded-lg hover:text-gray-200 font-medium transition-colors duration-200 ">
                Login
            </Link>
             <Link href="/auth/login" className=" bg-accent hover:bg-opacity-90  text-white rounded-lg hover:text-gray-200 font-medium transition-colors duration-200 ">
                Sign Up
            </Link>
        <div className="md:hidden">    
            <MobileMenu/>
        </div>    
        </div>
        
       </div>
       
       )
    
}

export default AccountLinks