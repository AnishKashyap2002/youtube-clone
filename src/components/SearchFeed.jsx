import React, { useEffect, useState } from "react";

import "../styles/Feed.css";
import Videos from "./Videos";
import { FetchFromApi } from "../utilitis/FetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchText } = useParams();

    useEffect(() => {
        FetchFromApi(`search?part=snippet&q=${searchText}`).then((data) =>
            setVideos(data.items)
        );
    }, [searchText]);

    return (
        <div className="feed">
            <div className="contents">
                <div>
                    <h3>
                        Search for{" "}
                        <span style={{ color: "red" }}>
                            {searchText + "  "}
                        </span>
                        videos
                    </h3>
                </div>
                <Videos videos={videos} />
            </div>
        </div>
    );
};

export default SearchFeed;
