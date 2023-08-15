import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { FetchFromApi } from "../utilitis/FetchFromApi";
import "../styles/ChannelDetail.css";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        FetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelDetail(data.items[0]);
        });
        FetchFromApi(`search?part=snippet&channelId=${id}&order=date`).then(
            (data) => {
                console.log(data.items);
                setVideos(data.items);
            }
        );
    }, [id]);
    return (
        <div>
            <div className="gradient" />
            <div className="channel-details">
                <ChannelCard channel={channelDetail} />
                <div className="channel-videos">
                    <Videos videos={videos} />
                </div>
            </div>
        </div>
    );
};
export default ChannelDetail;
