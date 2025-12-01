import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "../../assets/Logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState(
        localStorage.getItem("activeLink") || "home"
    );

    const handleLinkClick = (key) => {
        setActiveLink(key);
        localStorage.setItem("activeLink", key); // Save to localStorage
    };


    const navLinks = [
        { name: "Home", href: "/", key: "home" },
        { name: "News", href: "/news", key: "news" },
        { name: "Podcasts", href: "/podcasts", key: "podcasts" },
        { name: "Resources", href: "/resources", key: "resources" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`header-color font-inter w-full border-b border-[#262626] 
            sticky top-0 z-50 transition-all duration-300 
            ${isScrolled ? "bg-[#141414]/95 backdrop-blur-sm shadow-md" : "bg-[#141414]"}`}
        >
            {/* Top Banner */}
            <div className="bg-[#141414] text-[10px] xs:text-xs sm:text-sm md:text-base font-normal px-0 sm:px-4 py-2 sm:py-3 border-b border-[#262626] text-center">
                <div className="leading-snug flex items-center justify-center gap-1 sm:gap-2 md:text-sm text-xs font-normal text-[#98989A] text-center">
                    <span className="block sm:hidden">
                        Subscribe to our Newsletter For Blogs and Resources
                    </span>
                    <span className="hidden sm:block">
                        Subscribe to our Newsletter For New & Latest Blogs and Resources
                    </span>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.375 0.625L13.75 0.625C13.9158 0.625 14.0747 0.690848 14.1919 0.808058C14.3092 0.925269 14.375 1.08424 14.375 1.25V10.625C14.375 10.9702 14.0952 11.25 13.75 11.25C13.4048 11.25 13.125 10.9702 13.125 10.625V2.75888L1.69194 14.1919C1.44786 14.436 1.05214 14.436 0.808058 14.1919C0.563981 13.9479 0.563981 13.5521 0.808058 13.3081L12.2411 1.875L4.375 1.875C4.02982 1.875 3.75 1.59518 3.75 1.25C3.75 0.904822 4.02982 0.625 4.375 0.625Z"
                            fill="#FFD11A"
                        />
                    </svg>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="lg:px-20 md:px-14 px-4 mx-auto flex items-center justify-between py-5 ">
                {/* Logo */}
                <div className="w-28 sm:w-32 md:w-36">
                    <img src={Logo} alt="Logo" className="max-w-full h-auto" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-normal text-[#7E7E81]">
                    {navLinks.map((link) => (
                        <li key={link.key}>
                            <a
                                href={link.href}
                                onClick={() => handleLinkClick(link.key)}
                                className={`px-3 py-2 rounded-md transition  
    ${activeLink === link.key
                                        ? "text-white bg-[#141414] border border-[#333333]"
                                        : "hover:text-white hover:bg-[#141414] hover:border  hover:border-[#333333]"
                                    }`}
                            >
                                {link.name}
                            </a>

                        </li>
                    ))}
                </ul>

                {/* Contact Button (Desktop Only) */}
                <a href="/contact"> <button className="hidden md:block bg-[#FFD11A] text-black text-sm font-medium px-3 py-2.5 rounded-md hover:bg-yellow-500 transition">
                    Contact Us
                </button>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2"
                >
                    {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-800 px-6 py-6 space-y-4 animate-slideDown bg-[#141414]">
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            onClick={() => {
                                setActiveLink(link.key);
                                setIsOpen(false);
                            }}
                            className={`block px-3 py-2 rounded text-center transition border 
                                ${activeLink === link.key
                                    ? "text-white bg-[#141414] border-[#333333]"
                                    : "text-gray-300 hover:text-white hover:bg-[#141414] hover:border-[#333333]"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="/contact">
                        <button className="w-full bg-yellow-500 text-black font-semibold text-sm sm:text-base px-4 py-3 rounded-md hover:bg-yellow-400 transition">
                            Contact Us
                        </button>
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
