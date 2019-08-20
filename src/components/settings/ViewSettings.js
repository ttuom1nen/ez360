import React from "react";
import withSettings from "./withSettings";

const settings = {
  header: "View Settings",
  settings: [
    {
      label: "Pan",
      type: "text"
    },
    {
      label: "Tilt",
      type: "text"
    },
    {
      label: "Fov",
      type: "text"
    }
  ]
};

class ViewSettings extends React.Component {
  render() {
    return (
      <div className="settings-panel">
        {this.props.renderHeader()}
        <form>{this.props.renderSettings()}</form>
      </div>
    );
  }
}

export default withSettings(ViewSettings, settings);
