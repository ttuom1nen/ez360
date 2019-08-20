import React from "react";
import withSettings from "./withSettings";

const settings = {
  header: "Scene Settings",
  settings: [
    {
      label: "Title",
      type: "text"
    },
    {
      label: "Description",
      type: "textbox"
    },
    {
      label: "Author",
      type: "text"
    },
    {
      label: "Copyright",
      type: "text"
    }
  ]
};

class SceneSettings extends React.Component {
  render() {
    return (
      <div className="settings-panel">
        {this.props.renderHeader()}
        <form>{this.props.renderSettings()}</form>
      </div>
    );
  }
}

export default withSettings(SceneSettings, settings);
