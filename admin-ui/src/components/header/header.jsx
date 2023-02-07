import { Component } from "react";
import {
  AppBar,
  Button,
  Chip,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as LogoSvg } from "../header/logo.svg";

export class HeaderAdmin extends Component {
  render() {
    const { name } = this.props;

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            spacing: 2,
            alignItems: "center",
            marginBottom: 2,
            p: 2,
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <LogoSvg />
            <Typography variant="h6" color="primary" component="div">
              MOVING ESTATE
            </Typography>
          </Stack>
          <Toolbar>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Chip
                sx={{ p: 2 }}
                label={`Hello, ${name}!`}
                variant="outlined"
                color="primary"
              />
              <Button
                component="a"
                href="/api/auth/logout"
                variant="contained"
                size="small"
              >
                Sign out
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
