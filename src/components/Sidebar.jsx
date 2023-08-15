import React, { useState } from "react";
import { categories } from "../utilitis/constants";
import "../styles/Sidebar.css";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="sidebar">
            {categories.map((category, i) => {
                return (
                    <button
                        key={i}
                        className="category"
                        onClick={() => setSelectedCategory(category.name)}
                        style={{
                            backgroundColor:
                                category.name === selectedCategory && "red",
                        }}
                    >
                        <span
                            style={{
                                color:
                                    category.name === selectedCategory &&
                                    "white",
                            }}
                            className="clogo"
                        >
                            {category.icon}
                        </span>
                        <span>{category.name}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default Sidebar;
