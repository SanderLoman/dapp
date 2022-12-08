import React from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    return (
        <header className="flex bg-white border-b-2 justify-between text-white p-6">
            <h3 className="text-2xl flex-grow-0 text-black font-bold">LogoHier</h3>
            <nav className="flex">
                <ul className="flex text-black text-2xl">
                    <li className="mx-8"><a href="/">About</a></li>
                    <li className="mx-8"><a href="/">Staking</a></li>
                    <li className="mx-8"><a href="/">Roadman</a></li>
                </ul>
            </nav>
            <div className="flex flex-grow-0">
                <button className="text-2xl text-black">Connect</button>
            </div>
        </header>
    )
}

export default Navbar
