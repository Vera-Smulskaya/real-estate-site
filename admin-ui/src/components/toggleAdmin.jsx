import { Component } from "react";
import { ListItemButton, List } from "@mui/material";

export class ToggleAdmin extends Component {
  render() {
    const { title, link, isVisible } = this.props;
    if (!isVisible) return null;
    return (
      <List sx={{ display: "flex" }}>
        {title.split(" ").map((value) => (
          <ListItemButton
            key={value}
            component="a"
            to={link + value.toLowerCase()}
            sx={{
              maxWidth: "120px",
              alignItems: "center",
              justifyContent: "center",
              color: "#757575",
            }}
          >
            {value}
          </ListItemButton>
        ))}
      </List>
    );
  }
}
