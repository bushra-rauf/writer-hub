'use client'
import Link from "next/link";
import { useState } from "react";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";
import { menuItems } from "@/Data/data";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
     

  
    
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className="relative w-full">
            <div className="flex flex-col items-end">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <DotsThreeCircleVertical size={32} />
            </button>
             {/* {user && (
          <p className=" mt-2 text-sm font-medium text-amber-100 italic">
          Logged In:<span className="text-green-200 font-semibold"> {user.name}</span> 👋</p>)} */}
        </div>
            {isOpen && (
                
                <div className="fixed bg-amber-200 text-black py-8 px-6 text-2xl right-0 font-bold cursor-pointer rounded-md shadow-lg mt-4 ">
                <div className="flex flex-col gap-4 hover:text-emerald-600 transition">
                    {menuItems.map((item) => (
                        <Link href={item.path} key={item.path}>
                            {item.name}
                        </Link>
                    ))}
                    <button  className="bg-red-500 text-white rounded text-base max-w-20 text-center px-2 py-1">
                     Log out
                    </button>
                </div>
                </div>
            
            )}
        </div>
    );
};

export default MobileMenu;