import React from "react";
import { FaTwitter, FaMedium, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-[#98989A] px-4 md:px-10 lg:px-18 py-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Home</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer flex items-center gap-2">
              Resources
              <span className="text-[10px] px-2 py-0.5 rounded-md border border-[#262626] text-white">
                New
              </span>
            </li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Newsletter</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">News</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Trending Stories</li>
            <li className="hover:text-white cursor-pointer">Featured Videos</li>
            <li className="hover:text-white cursor-pointer">Technology</li>
            <li className="hover:text-white cursor-pointer">Health</li>
            <li className="hover:text-white cursor-pointer">Politics</li>
            <li className="hover:text-white cursor-pointer">Environment</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Blogs</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Quantum Computing</li>
            <li className="hover:text-white cursor-pointer">AI Ethics</li>
            <li className="hover:text-white cursor-pointer">Space Exploration</li>
            <li className="hover:text-white cursor-pointer flex items-center gap-2">
              Biotechnology
              <span className="text-[10px] px-2 py-0.5 rounded-md border border-[#262626] text-white">
                New
              </span>
            </li>
            <li className="hover:text-white cursor-pointer">Renewable Energy</li>
            <li className="hover:text-white cursor-pointer">Biohacking</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Podcasts</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer flex items-center gap-2">
              AI Revolution
              <span className="text-[10px] px-2 py-0.5 rounded-md border border-[#262626] text-white">
                New
              </span>
            </li>
            <li className="hover:text-white cursor-pointer">TechTalk AI</li>
            <li className="hover:text-white cursor-pointer">AI Conversations</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <div className="flex flex-col gap-3">
            {["Whitepapers", "Ebooks", "Reports", "Research Papers"].map(
              (item, idx) => (
                <button
                  key={idx}
                  className="flex items-center w-fit gap-4 px-3 py-2 border border-[#262626] rounded-md hover:bg-[#1a1a1a] text-left transition"
                >
                  {item}
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1875 0.3125L12.625 0.3125C12.7742 0.3125 12.9173 0.371763 13.0227 0.477252C13.1282 0.582742 13.1875 0.725816 13.1875 0.875V9.3125C13.1875 9.62316 12.9357 9.875 12.625 9.875C12.3143 9.875 12.0625 9.62316 12.0625 9.3125V2.233L1.77275 12.5227C1.55308 12.7424 1.19692 12.7424 0.977252 12.5227C0.757583 12.3031 0.757583 11.9469 0.977252 11.7273L11.267 1.4375L4.1875 1.4375C3.87684 1.4375 3.625 1.18566 3.625 0.875C3.625 0.56434 3.87684 0.3125 4.1875 0.3125Z" fill="#FFD11A" />
                  </svg>

                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#262626] my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left */}
        <div className="flex items-center gap-4 order-2">
          <span className="hover:text-white cursor-pointer">
            Terms & Conditions
          </span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center text-white gap-4 text-lg order-1">
          <div className="cursor-pointer">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5475 3.98396C17.5552 4.15996 17.5552 4.32796 17.5552 4.50396C17.563 9.83998 13.6426 16 6.47319 16C4.35865 16 2.2827 15.368 0.5 14.184C0.808692 14.224 1.11738 14.24 1.42608 14.24C3.1779 14.24 4.88343 13.632 6.26483 12.504C4.59789 12.472 3.1316 11.344 2.62226 9.69598C3.20877 9.81598 3.81072 9.79198 4.3818 9.62398C2.56824 9.25598 1.26401 7.59997 1.2563 5.67197C1.2563 5.65597 1.2563 5.63997 1.2563 5.62397C1.79651 5.93597 2.40617 6.11197 3.02356 6.12797C1.31803 4.94396 0.78554 2.58396 1.81966 0.735951C3.80301 3.26396 6.72015 4.79196 9.85337 4.95996C9.53696 3.55996 9.96913 2.08796 10.9801 1.09595C12.5467 -0.432053 15.0162 -0.352052 16.498 1.27195C17.37 1.09595 18.2112 0.759951 18.9752 0.28795C18.682 1.22395 18.0723 2.01596 17.262 2.51996C18.0337 2.42396 18.79 2.20796 19.5 1.88795C18.9752 2.70396 18.3115 3.40796 17.5475 3.98396Z" fill="white" />
          </svg>
          </div>

            <div className="cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2812 10.1897C11.2812 13.332 8.75578 15.8793 5.6407 15.8793C2.52561 15.8793 0 13.3314 0 10.1897C0 7.04806 2.52542 4.5 5.6407 4.5C8.75597 4.5 11.2812 7.04749 11.2812 10.1897Z" fill="white" />
            <path d="M17.4688 10.19C17.4688 13.1477 16.2061 15.5464 14.6485 15.5464C13.0908 15.5464 11.8281 13.1477 11.8281 10.19C11.8281 7.23219 13.0906 4.8335 14.6483 4.8335C16.2059 4.8335 17.4686 7.23142 17.4686 10.19" fill="white" />
            <path d="M19.9998 10.1897C19.9998 12.8391 19.5557 14.9882 19.0078 14.9882C18.4599 14.9882 18.0161 12.8397 18.0161 10.1897C18.0161 7.53965 18.4601 5.39111 19.0078 5.39111C19.5555 5.39111 19.9998 7.53946 19.9998 10.1897Z" fill="white" />
          </svg>
          </div>

            <div className="cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3873 0.333496H1.61303C1.27368 0.333496 0.948224 0.468304 0.708264 0.708264C0.468304 0.948224 0.333496 1.27368 0.333496 1.61303V16.3873C0.333496 16.7266 0.468304 17.0521 0.708264 17.2921C0.948224 17.532 1.27368 17.6668 1.61303 17.6668H16.3873C16.7266 17.6668 17.0521 17.532 17.2921 17.2921C17.532 17.0521 17.6668 16.7266 17.6668 16.3873V1.61303C17.6668 1.27368 17.532 0.948224 17.2921 0.708264C17.0521 0.468304 16.7266 0.333496 16.3873 0.333496ZM5.49979 15.0993H2.89377V6.82146H5.49979V15.0993ZM4.19498 5.67433C3.89937 5.67266 3.61088 5.58347 3.36592 5.418C3.12095 5.25254 2.93049 5.01821 2.81857 4.7446C2.70666 4.471 2.6783 4.17037 2.73707 3.88066C2.79585 3.59095 2.93913 3.32514 3.14883 3.11678C3.35853 2.90843 3.62525 2.76686 3.91533 2.70994C4.20541 2.65302 4.50586 2.68331 4.77874 2.79699C5.05162 2.91066 5.28472 3.10262 5.44861 3.34864C5.6125 3.59466 5.69984 3.88372 5.69961 4.17933C5.7024 4.37724 5.66531 4.57369 5.59056 4.75697C5.51581 4.94024 5.40493 5.10659 5.26452 5.2461C5.12411 5.38561 4.95705 5.49542 4.7733 5.56899C4.58955 5.64257 4.39287 5.67839 4.19498 5.67433ZM15.1053 15.1066H12.5005V10.5842C12.5005 9.25053 11.9336 8.83887 11.2017 8.83887C10.429 8.83887 9.67063 9.42146 9.67063 10.6179V15.1066H7.06461V6.82748H9.57072V7.97461H9.60442C9.856 7.46544 10.7371 6.59516 12.0816 6.59516C13.5357 6.59516 15.1066 7.45822 15.1066 9.986L15.1053 15.1066Z" fill="white" />
          </svg>
          </div>

        </div>

        {/* Right */}
        <p className="text-xs text-[#6B6B6B] order-3">
          © 2024 FutureTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
