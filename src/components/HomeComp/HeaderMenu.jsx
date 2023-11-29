import { KeyboardArrowDown } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function HeaderMenu() {
  return (
    <Box sx={{ p: 2, background: "blue", color: "white" }}>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item lg={2}>
          <Typography>Draw Sql</Typography>
        </Grid>
        <Grid item lg={4} sx={{ textAlign: "center" }}>
          <Typography>Diagrams / Frontend Developer</Typography>
        </Grid>

        <Grid item lg={3} sx={{}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "end",
            }}
          >
            <Button
              color="primary"
              endIcon={<KeyboardArrowDown />}
              variant="contained"
            >
              Save
            </Button>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
