import { Component } from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { ButtonEdit } from "./buttonEdit.jsx";
import { IconButton } from "@mui/material";
import Close from "@mui/icons-material/Close";

export class PropertyCard extends Component {
  render() {
    const {
      id,
      title,
      city,
      state,
      type,
      area,
      bedrooms,
      bathrooms,
      year,
      price,
      deal,
      preview,
      description,
      onClick,
    } = this.props;

    return (
      <Card sx={{ minWidth: 600, mb: 2.5 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              ID: {id}
            </Typography>
            <Box>
              <ButtonEdit path={`/properties/${id}/edit`} />
              <IconButton onClick={onClick} size="small">
                <Close color="primary" />
              </IconButton>
            </Box>
          </Box>

          <Typography variant="h6" color="primary" gutterBottom>
            Title: {title}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Preview:
              </Typography>
              <CardMedia
                component="img"
                alt={title}
                height="240"
                image={preview}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Property description:
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {description}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                City: {city}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                State: {state}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Property type: {type}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Area: {area}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Bedrooms: {bedrooms}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Bathrooms: {bathrooms}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Building year: {year}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Type of deal: {deal}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Price: $ {price}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
