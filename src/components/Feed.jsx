import React, { lazy, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Feed.css";
import Videos from "./Videos";
import { FetchFromApi } from "../utilitis/FetchFromApi";
import { CircularProgress } from "@mui/material";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log(selectedCategory);
        FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(
            (data) => {
                setVideos(data.items);
                setLoading(false);
            }
        );
    }, [selectedCategory]);
    return (
        <div className="feed">
            <Sidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <div className="contents">
                <div>
                    <h3>
                        {selectedCategory + " "}
                        <span style={{ color: "red" }}>videos</span>
                    </h3>
                </div>
                <span className="loading-videos">
                    {loading && <CircularProgress />}
                </span>
                <Videos videos={videos} />
            </div>
        </div>
    );
};

export default Feed;
