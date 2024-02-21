import React from "react";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-around items-center p-3 border-b-2">
            <div className="flex flex-row justify-around items-center pr-4 border-r-2">
                <a href="/">
                    <img src="./images/logo.png" alt="Logo" />
                </a>
                <p className="ml-3">worldcoins</p>
            </div>
            <a href="/contact">
                <button className="bg-blue-500 w-28 text-white p-2 rounded-full text-sm hover:bg-blue-700">
                    Contact
                </button>
            </a>
        </nav>
    );
};

export default Navbar;
