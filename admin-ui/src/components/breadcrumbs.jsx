import { Component } from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';

export class Breadcrumps extends Component {
  render() {
    const { title, breadcrumbs, lastBreadcrumbs } = this.props;
    return (
      <Box>
        <Breadcrumbs
          separator=">"
          sx={{ ml: 2, mb: 2 }}
          aria-label="breadcrumb"
        >
          {breadcrumbs.map((item, index)=>(
            <Link key={index} underline="hover" component={RouterLink} to={item.link}>
              {item.name}
            </Link>
          ))}
          {lastBreadcrumbs === "true" ? <Typography>{title}</Typography> : null}
        </Breadcrumbs>
      </Box>
    );
  }
}
