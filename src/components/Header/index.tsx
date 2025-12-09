import AccountLinks from "../AccountLinks"
import Logo from "../Logo"

const Header = () => {
    return(
        <header className= "flex items-center justify-between h-16 p-5 text-xl  bg-sky-900"> 
            <Logo/>
            <AccountLinks/>
        </header>
    )
}

export default Header