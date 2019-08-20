import React from "react";

const withSettings = (WrappedComponent, settings) => {
  class WithSettings extends React.Component {
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
          sectInput = <textarea className="form-control" rows="3" />;
        }

        return (
          <div className="form-group" key={`group-${index}`}>
            <label>{sect.label}</label>
            {sectInput}
          </div>
        );
      });
    }
    render() {
      return (
        <WrappedComponent
          renderHeader={this.renderHeader}
          renderSettings={this.renderSettings}
        />
      );
    }
  }

  return WithSettings;
};

export default withSettings;
