import { Component } from "react";
import { Button, ListItem } from "@mui/material";

export class LoadMoreBtn extends Component {
  render() {
    const { page, pages, properties, handleClick } = this.props;
    
    if(pages === 1) {return null}
    if(properties.length === 0) {return null}
    if(page === pages) {return null}

    return (
      <ListItem>
        <Button
          variant="contained"
          size="medium"
          onClick={ handleClick }
          sx={{ position: "sticky" }}
        >
          Show more
        </Button>
      </ListItem>
    );
  }
}
