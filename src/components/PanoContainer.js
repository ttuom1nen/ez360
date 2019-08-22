import React from "react";

const hsconfig = {
  pitch: 14.1,
  yaw: 1.5,
  type: "info",
  cssClass: "custom-hotspot",
  createTooltipFunc: hotspot,
  createTooltipArgs: "Test Hotspot",
  clickHandlerFunc: hsClick,
  clickHandlerArgs: { message: "test hs click" }
};

function hsClick(args) {
  console.log(this);
  console.log(args);
}

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");
  var span = document.createElement("span");
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + "px";
  span.style.marginLeft =
    -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
  span.style.marginTop = -span.scrollHeight - 12 + "px";
}

const createHotspot = evt => {
  let coords = window.editor.player.mouseEventToCoords(evt);

  hsconfig.pitch = coords[0];
  hsconfig.yaw = coords[1];

  window.editor.player.addHotSpot(hsconfig, window.editor.player.getScene());
};

const PanoContainer = () => {
  return <div id="pano-container" onDoubleClick={evt => createHotspot(evt)} />;
};

export default PanoContainer;
