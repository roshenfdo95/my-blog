import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar(){
        return (
            <header className="bg-red-600">
                <div className="container mx-auto flex justify-between">
                    <nav className="flex">
                        <NavLink to="/" className="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest">RM</NavLink>
                        <NavLink to="/allpost" className="inflex-flex items-center py-3 px-3 my-6 rounded text-black-100 hover:text-red-800">Blog Posts</NavLink>
                        <NavLink to="/about" className="inflex-flex items-center py-3 px-3 my-6 rounded text-black-100 hover:text-red-800">About Me</NavLink>
                    </nav>
                </div>
            </header>

        );
}