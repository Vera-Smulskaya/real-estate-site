import { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
} from "@mui/material";
import { ButtonEdit } from "./buttonEdit";
import { IconButton } from "@mui/material";
import Close from "@mui/icons-material/Close";

export class PropertyItem extends Component {
  render() {
    const { prop_id, title, preview, onDelete } = this.props;

    return (
      <ListItem
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 0.5,
          paddingRight: 0.5,
          borderBottom: "1px solid grey",
        }}
      >
        <Link
          underline="hover"
          component={RouterLink}
          to={`/properties/${prop_id}`}
          sx={{ display: "flex" }}
        >
          <ListItemAvatar>
            <Avatar variant="square" alt={title} src={preview} />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            sx={{ display: "flex", alignItems: "center" }}
          />
        </Link>
        <Box>
          <ButtonEdit path={`/properties/${prop_id}/edit`} />
          <IconButton onClick={onDelete} size="small">
            <Close color="primary" />
          </IconButton>
        </Box>
      </ListItem>
    );
  }
}
