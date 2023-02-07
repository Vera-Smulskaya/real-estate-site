import React, { Component } from "react";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Select,
  MenuItem,
  TextField,
  Stack,
  InputLabel,
  Button,
} from "@mui/material";

export class PropertyForm extends Component {
  state = {
    values: this.props.defaultValues || {
      title: "",
      prop_id: "",
      city: "",
      state: "",
      deal: "",
      type: "",
      price: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      year: "",
      preview: "",
      description: "",
    },
  };

  handleChange(name, value) {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  }

  handleSubmit() {
    const { onSubmit, onClose } = this.props;
    onSubmit(this.state.values);
    onClose();
  }

  render() {
    const { values } = this.state;
    const {
      title,
      prop_id,
      city,
      state,
      deal,
      type,
      price,
      area,
      bedrooms,
      bathrooms,
      year,
      preview,
      description,
    } = values;

    const { buttonName, onClose } = this.props;

    return (
      <Stack sx={{ width: "600px", margin: "auto" }} spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={(event) => this.handleChange("title", event.target.value)}
        />
        <TextField
          label="ID"
          value={prop_id}
          onChange={(event) => this.handleChange("prop_id", event.target.value)}
        />
        <TextField
          label="City"
          value={city}
          onChange={(event) => this.handleChange("city", event.target.value)}
        />
        <TextField
          label="State"
          value={state}
          onChange={(event) => this.handleChange("state", event.target.value)}
        />
        <FormControl>
          <FormLabel>Deal</FormLabel>
          <RadioGroup
            row
            value={deal}
            sx={{ justifyContent: "center" }}
            onChange={(event) => this.handleChange("deal", event.target.value)}
          >
            <FormControlLabel value="rent" control={<Radio />} label="Rent" />
            <FormControlLabel value="sale" control={<Radio />} label="Sale" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <InputLabel>Type</InputLabel>
          <Select
            id="type"
            value={type}
            label="Type"
            onChange={(event) => this.handleChange("type", event.target.value)}
          >
            <MenuItem value="townhouse">Townhouse</MenuItem>
            <MenuItem value="apartment">Apartment</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Price"
          type="number"
          inputProps={{ min: 0 }}
          value={price}
          onChange={(event) =>
            this.handleChange("price", parseInt(event.target.value))
          }
        />
        <TextField
          label="Area"
          type="number"
          inputProps={{ min: 0 }}
          value={area}
          onChange={(event) =>
            this.handleChange("area", parseInt(event.target.value))
          }
        />

        <TextField
          label="Bedrooms"
          type="number"
          inputProps={{ min: 0 }}
          value={bedrooms}
          onChange={(event) =>
            this.handleChange("bedrooms", parseInt(event.target.value))
          }
        />
        <TextField
          label="Bathrooms"
          type="number"
          inputProps={{ min: 0 }}
          value={bathrooms}
          onChange={(event) =>
            this.handleChange("bathrooms", parseInt(event.target.value))
          }
        />
        <TextField
          label="Year"
          type="number"
          inputProps={{ min: 0 }}
          value={year}
          onChange={(event) =>
            this.handleChange("year", parseInt(event.target.value))
          }
        />
        <TextField
          label="Preview picture"
          value={preview}
          onChange={(event) => this.handleChange("preview", event.target.value)}
        />
        <TextField
          label="Decscription"
          value={description}
          onChange={(event) =>
            this.handleChange("description", event.target.value)
          }
        />
        <Stack
          sx={{ margin: "20px auto", justifyContent: "center" }}
          direction="row"
          spacing={2}
        >
          <Button onClick={onClose} sx={{ width: "80px" }}>
            Cancel
          </Button>
          <Button onClick={() => this.handleSubmit()} sx={{ width: "80px" }}>
            {buttonName || "Create"}
          </Button>
        </Stack>
      </Stack>
    );
  }
}
