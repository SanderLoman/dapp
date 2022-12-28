import { React, useState, useRef } from "react"
import { ChainId, DAppProvider, Token, useEthers } from "@usedapp/core"
import { FaTimes, FaBars } from "react-icons/fa"
import { Transition } from "@headlessui/react"
import { Link } from "react-scroll"
import Header from "../header/Header"
import Content from "../content/Content"
import Tokenomics from "../tokenomics/Tokenomics"
import Achtergrond from "../achtergrond/Achtergrond"
import Footer from "../footer/Footer"
import WTFlogo from "../../assets/LOGO.png"
import "./Main.css"

function Main() {
    const { account, activateBrowserWallet } = useEthers()

    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)
    return (
        <>
            <nav className="md:bg-transparent text-5xl bg-white z-20">
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link
                                to="header-container"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                <img
                                    src={WTFlogo}
                                    alt="WTF logo"
                                    className="h-10"
                                />
                            </Link>
                        </div>
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
                            <li className="flex items-center mx-4 font-semibold hover:cursor-pointer">
                                <Link
                                    to="staking"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Staking
                                </Link>
                            </li>
                            <li className="flex items-center mx-4 font-semibold hover:cursor-pointer">
                                <Link
                                    to="roadmap"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Roadmap
                                </Link>
                            </li>
                            <li className="flex items-center mx-4 font-semibold hover:cursor-pointer">
                                <Link
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* mobile menu */}
                <Transition
                    className="text-5xl fixed w-full h-full"
                    show={isOpen}
                    enter="transition-all duration-500"
                    enterFrom="transform translate-y-full"
                    enterTo="transform translate-y-0"
                    leave="transition-all duration-500"
                    leaveFrom="transform translate-y-0"
                    leaveTo="transform translate-y-full"
                >
                    <ul className="sm:hidden top-full h-full px-4 py-2 bg-white shadow-md">
                        <li className="block px-4 py-2">
                            <Link
                                to="staking"
                                spy={true}
                                smooth={true}
                                delay={250}
                                offset={0}
                                duration={500}
                                onClick={closeMenu}
                                className="flex justify-center font-semibold border-b text-center text-customPink py-2"
                            >
                                Staking
                            </Link>
                        </li>
                        <li className="block px-4 py-2">
                            <Link
                                to="roadmap"
                                spy={true}
                                smooth={true}
                                delay={250}
                                offset={0}
                                duration={500}
                                onClick={closeMenu}
                                className="flex justify-center font-semibold border-b text-center text-customPurple py-2"
                            >
                                Roadmap
                            </Link>
                        </li>
                        <li className="block px-4 py-2">
                            <Link
                                to="team"
                                spy={true}
                                smooth={true}
                                delay={250}
                                offset={250}
                                duration={500}
                                onClick={closeMenu}
                                className="flex justify-center font-semibold border-b text-center text-customOrange py-2"
                            >
                                Team
                            </Link>
                        </li>
                    </ul>
                </Transition>
            </nav>
            <Header />
            <Content />
            <Tokenomics />
            <Achtergrond />
            {/* <Footer /> */}
        </>
    )
}

export default Main
