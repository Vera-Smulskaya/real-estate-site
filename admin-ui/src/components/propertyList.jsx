import { Component } from "react";
import { List } from "@mui/material";
import { PropertyItem } from "../components/propertyItem";

export class PropertyList extends Component {
  render() {
    const { properties, onDelete } = this.props;

    return (
      <List
        sx={{
          maxWidth: "95%",
          bgcolor: "background.paper",
          maxHeight: "77%",
          overflow: "auto",
          "&:empty::before": {
            content: '"Sorry... No properties found 😅"',
            display: "block",
          },
        }}
      >
        {properties.map((property) => (
          <PropertyItem
            key={property.id}
            onDelete={() => onDelete(property)}
            {...property}
          />
        ))}
      </List>
    );
  }
}
