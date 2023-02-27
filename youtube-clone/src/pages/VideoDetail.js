import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setViedos] = useState(null);
  const { videoId } = useParams();

  const [subscriberCount, setSubsceriberCount] = useState(0);
 
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
      (data) => {
        //console.log(data);
        setVideoDetail(data.items[0]);
    fetchFromAPI(`channels?part=snippet,statistics&id=${data.items[0]?.snippet?.channelId}`)
    .then((response) => {
        //console.log(response);
        setSubsceriberCount(response.items[0].statistics.subscriberCount);
      });  
    }
    );
    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => {
      console.log(data);
      setViedos(data.items);
    });
  }, [videoId]);
  if (!videoDetail?.snippet) return <Loader></Loader>;
  const {
    snippet: { title, channelId, channelTitle, subscribeCount, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", positions: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId} `}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  ></CheckCircleIcon>
                  {" "}{parseInt(subscriberCount).toLocaleString()} subscribers
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                color="#fff"
                variant="h7"
                fontWeight="bold"
                p={2}
              >
                {description}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
