import './MegaMenu.css';
import React, { useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'

function MegaMenu() {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();
    const dropdownRef = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return ( 
      <div className="megamenu">

            <div className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                  
                    <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 
                      justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none
                       focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                       aria-expanded={isMenuOpen}
                       onClick={toggleMenu}      >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor"  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    {/* menu names */}
                    <div   id="mega-menu-full-cta"
                            className={`items-center justify-between ${
                            isMenuOpen ? 'block' : 'hidden'
                            } w-full md:flex md:w-auto md:order-1`}
                            // onMouseEnter={handleMenuEnter}
                            // onMouseLeave={handleMemuLeave}
                            ref={menuRef}
                            onClick={toggleMenu}>
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                                    dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" 
                                     aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="#" id="mega-menu-full-cta-dropdown-button"
                                    data-collapse-toggle="mega-menu-full-cta-dropdown"
                                    data-dropdown-placement="bottom"
                                    className=" block py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 "
                                    aria-expanded={isDropdownOpen}
                                    onClick={toggleDropdown} >  Company   </Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                             dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                               dark:hover:text-blue-500 md:dark:hover:bg-transparent
                                dark:border-gray-700">Marketplace</Link>
                            </li>
                        
                        </ul>
                    </div>
                    {/* end menu names */}

                </div>
                <div  id="mega-menu-full-cta-dropdown"
                   className={`mt-1 ${isDropdownOpen ? 'block' : 'hidden'} bg-white border-gray-200 shadow-sm 
                   border-y dark:bg-gray-800 dark:border-gray-600`} 
                   onClick={toggleDropdown} ref={dropdownRef}
                 >  
                   
                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                        <ul className="space-y-4 sm:mb-4 md:mb-0" aria-labelledby="mega-menu-full-cta-button">
                            <li>
                          <Link to="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Online Stores
                                </Link>
                            </li>
                            <li>
                          <Link to="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Segmentation
                                </Link>
                            </li>
                            <li>
                          <Link to="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Marketing CRM
                                </Link>
                            </li>
                            <li>
                          <Link to="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Online Stores
                                </Link>
                            </li>
                        </ul>
                        <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
                            <li>
                          <Link to="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Our Blog
                                </Link>
                            </li>
                            <li>
                          <Link to="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Terms & Conditions
                          </Link>
                            </li>
                            <li>
                          <Link to="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    License
                                </Link>
                            </li>
                            <li>
                          <Link to="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
                      <Link to="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700">
                                Explore our brands 
                                <span className="sr-only">Explore our brands </span>
                                {/* <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      </div>
        

  )
}

export default  MegaMenu