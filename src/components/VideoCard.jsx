import React from "react";
import "../styles/VideoCard.css";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
    demoProfilePicture,
    demoThumbnailUrl,
    demoVideoTitle,
    demoVideoUrl,
    demoChannelTitle,
    demoChannelUrl,
} from "../utilitis/constants";

const VideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video.id.videoId}`}>
            <div className="video">
                <div className="video-image">
                    <img
                        src={video.snippet.thumbnails.high.url}
                        alt="video"
                    />
                </div>
                <div className="video-desc">
                    <div className="video-title">{video.snippet.title}</div>
                    <div className="channel-title">
                        <span>{video.snippet.channelTitle + " "}</span>
                        <span>
                            <CheckCircle />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
