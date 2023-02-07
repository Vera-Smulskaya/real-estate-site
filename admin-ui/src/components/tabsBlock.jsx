import { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";

class TabsBlock extends Component {
  render() {
    const { baseUrl, tabs, currentTab } = this.props;

    const switchTabs = (event, newValue) => {
      this.setState({ value: newValue });
    };

    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabs.indexOf(currentTab)} onChange={switchTabs}>
            {tabs.map((tab, index) => {
              const tabSlug = tab.replace(" ", "_");
              return (
                <Tab
                  key={index}
                  label={tab}
                  component={NavLink}
                  to={`${baseUrl}/${tabSlug}`}
                />
              );
            })}
          </Tabs>
        </Box>
      </Box>
    );
  }
}

export default withRouter(TabsBlock);
