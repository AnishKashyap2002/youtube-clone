import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import "../styles/Videos.css";
import { Link } from "react-router-dom";

const Videos = ({ videos, direction }) => {
    console.log(videos);
    return (
        <div
            className="videos"
            style={{ flexDirection: direction || "row" }}
        >
            {videos.map((cardDetail, idx) => {
                if (cardDetail.id.videoId) {
                    return (
                        <VideoCard
                            video={cardDetail}
                            key={idx}
                        />
                    );
                } else {
                    return (
                        <Link to={`/channel/${cardDetail?.id?.channelId}`}>
                            <ChannelCard channel={cardDetail} />
                        </Link>
                    );
                }
            })}
        </div>
    );
};

export default Videos;
