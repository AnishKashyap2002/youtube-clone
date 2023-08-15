import React from "react";
import "../styles/ChannelCard.css";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utilitis/constants";
import { FlashOn } from "@mui/icons-material";

const ChannelCard = ({ channel }) => {
    return (
        <div className="channel">
            <div className="channel-image">
                <img
                    src={
                        channel?.snippet?.thumbnails?.high?.url ||
                        demoProfilePicture
                    }
                    alt="Channel"
                />
            </div>
            <div className="channel-desc">
                <p className="channel-name">
                    <span>{channel?.snippet?.title} </span>
                    <FlashOn />
                </p>
                <p className="subscribers">
                    {channel?.statistics?.subscriberCount && (
                        <span>
                            {parseInt(
                                channel?.statistics?.subscriberCount
                            ).toLocaleString()}{" "}
                            Subscribers
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ChannelCard;
