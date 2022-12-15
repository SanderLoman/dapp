import { React, useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import { Menu, Transition } from "@headlessui/react"
import WTFlogo from "../../assets/wtf_dude_orange.png"
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="border-b text-4xl">
            <div className="px-6 py-3">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <div className="flex items-center">
                            <span className="text-customPurple mx-2 font-semibold">
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
                    <ul className="sm:flex hidden">
                        <li className="flex items-center">
                            <span className="text-customPurple mx-2 font-semibold">
                                <a href="/">Staking</a>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-customPink mx-2 font-semibold">
                                <a href="/">Roadmap</a>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-customOrange mx-2 font-semibold">
                                <a href="/">Team</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

// kijk de video in discord weer verder 