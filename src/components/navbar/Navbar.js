import { React, useRef } from "react"
import uni from "../../assets/uni.png"
import "./Navbar.css"

const Navbar = () => {
    const navRef = useRef(null)

    const showNavbar = () => {
        navRef.current.classList.toggle("hidden")
    }
    return (
        <header className="flex justify-between h-full">
            <img src={uni} alt="logo" className="w-20 h-20" />
            <nav className="text-black" ref={navRef}>
                <ul className="flex">
                    <li className="text-4xl m-5">
                        <a href="#projects">Staking</a>
                    </li>
                    <li className="text-4xl m-5">
                        <a href="#roadmap">Roadmap</a>
                    </li>
                    <li className="text-4xl m-5">
                        <a href="#team">Team</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
