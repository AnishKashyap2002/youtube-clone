import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { FetchFromApi } from "../utilitis/FetchFromApi";
import Videos from "./Videos";
import "../styles/VideoDetail.css";
import { Box, Stack } from "@mui/material";
import { FlashOn } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const VideoDetail = () => {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideoDetail(data.items[0]);
        });
        FetchFromApi(
            `search?part=snippet&relatedToVideoId=${id}&type=video`
        ).then((data) => {
            setVideos(data.items);
        });
        setLoading(false);
    }, [id]);

    if (!videoDetail?.snippet)
        return (
            <span className="video-loader">
                <CircularProgress />
            </span>
        );
    const {
        snippet: { title, channelId, channelTitle },
        statistics: { likeCount, viewCount },
    } = videoDetail;
    return (
        <div className="video-detail">
            <div className="video-display">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${id}`}
                    controls
                    className="react-player"
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="details">
                <div className="other-details">
                    <div>
                        <div className="title">{title}</div>
                    </div>
                    <div className="stats">
                        <span>
                            {parseInt(viewCount).toLocaleString()} views
                        </span>
                        <span style={{ marginLeft: "10px" }}>
                            {parseInt(likeCount).toLocaleString()} likes
                        </span>
                    </div>
                </div>
                <div className="channel-name">
                    <span>{channelTitle + " "}</span>
                    <FlashOn />
                </div>
            </div>
            <div className="other-videos">
                <Videos
                    videos={videos}
                    display={"column"}
                />
            </div>
        </div>
    );
};

export default VideoDetail;
