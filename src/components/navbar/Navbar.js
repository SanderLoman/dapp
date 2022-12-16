import { React, useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import WTFlogo from "../../assets/wtf_dude_orange.png"
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="text-5xl">
            <div className="px-6 py-3">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <div className="flex items-center">
                            <span className="mx-4 font-semibold">
                                WTF
                            </span>
                            <img
                                src={WTFlogo}
                                alt="WTF logo"
                                className="w-10 h-10"
                            />
                        </div>
                    </a>
                    <button
                        className="navbar-toggler"
                        aria-label="toggle menu"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <FaTimes className="sm:hidden" />
                        ) : (
                            <FaBars className="sm:hidden" />
                        )}
                    </button>
                    {/* desktop menu */}
                    <ul className="sm:flex hidden">
                        <li className="flex items-center">
                            <span className="mx-4 font-semibold">
                                <a href="/">Staking</a>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-4 font-semibold">
                                <a href="/">Roadmap</a>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-4 font-semibold">
                                <a href="/">Team</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* mobile menu */}
            <ul
                className={`sm:hidden ${
                    isOpen ? "block" : "hidden"
                } relative top-full right-0 mt-2 px-4 py-2 bg-white shadow-md z-10`}
            >
                <li className="block px-4 py-2">
                    <a href="/" className="flex justify-center font-semibold">
                        Staking
                    </a>
                </li>
                <li className="block px-4 py-2">
                    <a href="/" className="flex justify-center font-semibold">
                        Roadmap
                    </a>
                </li>
                <li className="block px-4 py-2">
                    <a href="/" className="flex justify-center font-semibold">
                        Team
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar