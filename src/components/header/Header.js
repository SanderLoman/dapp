import React from "react"
import "./Header.css"

const Header = () => {
    return (
        <div className=" text-4xl h-screen border-b">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="hidden w-full text-gray-600 md:flex md:items-center">
                        <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">test123</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
