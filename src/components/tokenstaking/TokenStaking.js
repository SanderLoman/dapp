import { React, useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import { Transition } from "@headlessui/react"
import WTFlogo from "../../assets/LOGO.png"
import { Link } from "react-router-dom"

const TokenStaking = () => {
    const [isOpen, setIsOpen] = useState(false)

    let closeMenu = () => setIsOpen(false)
    return (
        <>
            <nav className="md:bg-transparent text-5xl bg-white z-20">
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link to="/">
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
                            <a
                                href="#"
                                className="flex justify-center font-semibold border-b text-customPink"
                                onClick={closeMenu}
                            >
                                Staking
                            </a>
                        </li>
                        <li className="block px-4 py-2">
                            <a
                                href="#"
                                className="flex justify-center font-semibold border-b text-customPurple"
                                onClick={closeMenu}
                            >
                                Roadmap
                            </a>
                        </li>
                        <li className="block px-4 py-2">
                            <a
                                href="#"
                                className="flex justify-center font-semibold text-customOrange"
                                onClick={closeMenu}
                            >
                                Team
                            </a>
                        </li>
                    </ul>
                </Transition>
            </nav>
            <div className="flex flex-col h-max rounded-full border-2 border-red-500 m-40">
                test!@#
            </div>
        </>
    )
}

export default TokenStaking
