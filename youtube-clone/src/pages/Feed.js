import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar } from "../components";

const Feed = () => {
  const [selectedCategory, setSeletedCategory] = useState("New")
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3e3e3e",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSeletedCategory={setSeletedCategory}
        />
      </Box>
      <Box>Video</Box>
    </Stack>
  );
};

export default Feed;
