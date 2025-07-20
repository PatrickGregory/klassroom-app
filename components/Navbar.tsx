import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href='/'>
                <div className="cursor-pointer flex items-center gap-2.5">
                    <Image
                        src='/images/logo.svg'
                        alt="Logo"
                        width={44}
                        height={42}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <p>Sign In</p>
            </div>
        </nav>
    )
}

export default Navbar
