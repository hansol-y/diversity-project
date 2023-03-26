import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

import Navbar from "scenes/navbar";

const CreateEventPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (

    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Bulletin
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Create your own event and find people to work with you!
        </Typography>

        <Form />
      </Box>
    </Box>
  );
};

export default CreateEventPage;
