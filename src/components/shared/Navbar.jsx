/* eslint-disable react/prop-types */
import React, { useState } from "react"; // Import useState
import styled from "styled-components";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi"; // Import hamburger icon
import { FiX } from "react-icons/fi"; // Import close icon

const Navbar = ({ navbarRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Toggle menu state
    };

    return (
        <Wrapper ref={navbarRef}>
            <div className="container">
                <Logo />
                <div className="flex justify-end items-center">
                    {/* Toggle button for mobile menu */}
                    <button onClick={toggleMenu} className="menu-toggle">
                        {isMenuOpen ? <FiX size={24} /> : <BiMenu size={24} />} {/* Toggle icon */}
                    </button>
                    {/* Nav items */}
                    <nav className={`nav-items ${isMenuOpen ? "open" : ""}`}>
                        <NavLink className="nav-item bg-[#32c888] text-white px-6 py-2 rounded" to="/dashboard">
                            Dashboard
                        </NavLink>
                        <NavLink className="nav-item" to="/all-jobs">
                            Jobs
                        </NavLink>
                        <NavLink className="nav-item" to="/salary">
                            Salary
                        </NavLink>
                    </nav>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 5px var(--shadow-light);
    padding: 1rem 0; /* Top and bottom padding */

    .container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px; /* Added padding on left and right */
    }

    .menu-toggle {
        background: transparent;
        border: none;
        cursor: pointer;
        display: none; // Initially hidden for desktop
        z-index: 2; // Make sure it’s on top
    }

    .nav-items {
        display: flex; // Default to flex display
        flex-direction: row; // Default direction
        align-items: center; // Center items vertically
        transition: all 0.3s ease; // Add transition for smooth effect
        position: relative; // Required for absolute positioning of mobile menu
    }

    .nav-item {
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        margin-left: 20px;
        color: var(--color-black);
    }

    .nav-item.active {
        color: var(--color-primary);
    }

    // Mobile styles
    @media screen and (max-width: 600px) {
        .menu-toggle {
            display: block; // Show hamburger icon on mobile
        }

        .nav-items {
            position: absolute;
            top: 60px; // Adjust based on your navbar height
            left: 0;
            right: 0;
            background-color: white; // Background color of the menu
            flex-direction: column; // Stack items vertically
            align-items: flex-start; // Align items to the start
            display: none; // Hide by default
            padding: 1rem; // Add some padding
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // Optional shadow
        }

        .nav-items.open {
            display: flex; // Show when open
        }

        .nav-item {
            margin: 10px 0; // Space between items
            width: 100%; // Make items full width
            padding: 0 20px; // Add padding to nav items
        }
    }

    // Desktop styles
    @media screen and (min-width: 601px) {
        .nav-items {
            display: flex; // Show nav items in a row on desktop
        }
    }
`;

export default Navbar;
