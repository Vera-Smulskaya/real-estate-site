import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Box } from "@mui/system";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

class MessageList extends Component {
  render() {
    const { messages } = this.props;

    return (
      <Box>
        <List
          sx={{
            width: "90%",
            maxWidth: "70%",
            ml: 2,
            "&:empty::before": {
              content: '"No messages found 😅"',
              display: "block",
            },
          }}
        >
          {messages.map(({ id, name, email, text, PropertyId }) => (
            <ListItem
              sx={{
                borderBottom: 1,
                borderColor: "lightgrey",
              }}
              key={id}
              alignItems="flex-start"
            >
              <Typography>
                from {name} ({email}) about id {PropertyId} :
              </Typography>
              <ListItemText
                sx={{
                  ml: 2,
                }}
                secondary={text}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}

export default withRouter(MessageList);
