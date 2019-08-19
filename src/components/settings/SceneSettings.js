import React from "react"

class SceneSettings extends React.Component{
    render(){
        return(
            <div className="settings-panel">
             <h4 className="mb-3">Scene Settings</h4>

                <div className="setting-group">

                    <label>Title</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                    <label>Description</label>
                    <div className="input-group mb-3">
                        <textarea type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                    <label>Author</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                    <label>Copyright</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                    <label>Source</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                </div>

                <div className="setting-group">

                    <label>Latitude</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                    <label>Longitude</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                    <label>Altitude</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                    <label>North</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>

                </div>

            </div>
        )
    }
}

export default SceneSettings