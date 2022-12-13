import React from "react"
import WTFlogo from "../../assets/wtf_dude_orange.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="bg-white text-4xl">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <div className="flex items-center">
                            <span className="text-customPurple text-1xl mx-2 font-semibold">
                                WTF
                            </span>
                            <img
                                src={WTFlogo}
                                alt="WTF logo"
                                className="w-10 h-10"
                            />
                        </div>
                    </a>
                    <ul className="LINKS flex">
                        <li className="flex items-center">
                            <span className="text-customPurple text-1xl mx-2 font-semibold">
                                <a href="/">Staking</a>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-customPink text-1xl mx-2 font-semibold">
                                <a href="/">Roadmap</a>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-customOrange text-1xl mx-2 font-semibold">
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
