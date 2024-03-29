import { Box, useMediaQuery, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";

import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";

import api from './axios.config.js';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const createEventPage = () => {
    navigate("/events/createEvent");
  }
  const { palette } = useTheme();
  useEffect(() => {
    api.get('/events').then((res) => {
      setEvents(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <div>
          {events.map((event) => (
            <div key={event._id}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
        <Typography
              onClick={() => {
                createEventPage();
              }}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {"Create Event"}
            </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
