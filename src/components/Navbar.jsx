import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AirplayIcon from "@mui/icons-material/Airplay";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import "../styles/Navbar.css";

const Navbar = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();

        if (searchText) {
            console.log(searchText);
            navigate(`/search/${searchText}`);
            setSearchText("");
        }
    };
    return (
        <div className="navbar">
            <Link to="/">
                <div className="logo">
                    <AirplayIcon />
                </div>
            </Link>
            <div className="searchBar">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="search..."
                    value={searchText}
                />
                <button
                    className="searchButton"
                    onClick={handleClick}
                >
                    <TroubleshootOutlinedIcon />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
