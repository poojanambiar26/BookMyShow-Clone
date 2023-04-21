import React from "react";
import { BiChevronRight } from "react-icons/bi";
const NavSm = () =>{
    return(
        <>
        <div>
            <div>
                <h3>It all Starts Here!</h3>
                <span>Bhubaneshwar
             <BiChevronRight />
                </span>
            </div>
        </div>
        </>
    )
};
const NavMd = () =>{};
const NavLg = () =>{};

const Navbar = () =>{
    return (
    <>
    <nav>
        <div className="md:hidden">
            {
            /*moblie screen  */
            <NavSm />
            }
        </div>
        <div className="hidden lg:hidden md:flex">
        {
            /*tablet screen  */
            } 
        </div>
        <div className="hidden lg:flex">
          {
            /*desktop screen  */
            }  
        </div>
    </nav>
    <NavSm />
    </>
    )
};

export default Navbar;