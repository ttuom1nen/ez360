import React from "react";

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
  renderHeader() {
    return <h4 className="mb-3">{settings.header}</h4>;
  }
  renderSettings() {
    let sectInput = undefined;

    return settings.settings.map((sect, index) => {
      if (sect.type === "text") {
        sectInput = (
          <input
            type="text"
            className="form-control"
            aria-describedby="Settings input"
          />
        );
      } else {
        sectInput = <textarea class="form-control" rows="3" />;
      }

      return (
        <div className="form-group" key={`group-${index}`}>
          <label for="exampleInputEmail1">{sect.label}</label>
          {sectInput}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="settings-panel">
        {this.renderHeader()}
        <form>{this.renderSettings()}</form>
      </div>
    );
  }
}

export default SceneSettings;
