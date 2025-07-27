import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

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
                <SignedOut>
                    <div className="flex items-center gap-2">
                        <SignInButton>
                            <button className="btn-signin">Sign In</button>
                        </SignInButton>
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar
