import { React, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
    const navRef = useRef(null)

    const showNavbar = () => {
        navRef.current.classList.toggle("hidden")
    }
    return (
        <header className="flex bg-white justify-between p-4">
            <h3 className="text-4xl text-black font-bold">LogoHier</h3>
            <nav ref={navRef} className="flex">
                <ul className="flex text-black text-4xl nav-items">
                    <li className="mx-8">
                        <a href="/">About</a>
                    </li>
                    <li className="mx-8">
                        <a href="/">Staking</a>
                    </li>
                    <li className="mx-8">
                        <a href="/">Roadman</a>
                    </li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>

            <button className="text-4xl font-bold">Connect</button>
        </header>
    )
}

export default Navbar
