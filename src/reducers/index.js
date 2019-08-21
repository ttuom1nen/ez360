import { combineReducers } from "redux";

const scenesReducer = () => {
  return [
    {
      id: "e281ad3d-8f36-55f6-a4ca-9d0091d05f83",
      config: {
        title: "test scene",
        hfov: 110,
        pitch: -3,
        yaw: 117,
        type: "equirectangular",
        panorama: "assets/equi/default.png",
        thumbnail: "assets/equi/default_thumb.jpg",
        showControls: false,
        autoLoad: true,
        hotSpots: []
      }
    },
    {
      id: "95ffd672-6321-5fe1-8ed0-897dfdef7ddf",
      config: {
        title: "Office",
        hfov: 110,
        pitch: -3,
        yaw: 117,
        type: "equirectangular",
        panorama: "assets/equi/office.png",
        thumbnail: "assets/equi/office_thumb.jpg",
        showControls: false,
        autoLoad: true,
        hotSpots: []
      }
    },
    {
      id: "343244-6321-5fe1-8ed0-897dfdef7ddf",
      config: {
        title: "Another test scene",
        hfov: 110,
        pitch: -3,
        yaw: 117,
        type: "equirectangular",
        panorama: "assets/equi/office2.png",
        thumbnail: "assets/equi/office2_thumb.jpg",
        showControls: false,
        autoLoad: true,
        hotSpots: []
      }
    }
  ];
};

const selectedSceneReducer = (selectedScene = null, action) => {
  if (action.type === "SCENE_SELECTED") {
    return action.payload;
  }

  return selectedScene;
};

export default combineReducers({
  scenes: scenesReducer,
  selectedScene: selectedSceneReducer
});
