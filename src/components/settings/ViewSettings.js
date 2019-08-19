import React from "react"

class ViewSettings extends React.Component{
    render(){
        return(
            <div className="settings-panel">
                <h4 className="mb-3">Viewport Settings</h4>

                <div className="setting-group mb-3">
                    <h6 className="mb-3">Default view:</h6>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Pan</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Username" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Tilt</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Username" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Fov</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Username" />
                    </div>

                    <button type="button" className="btn btn-link">Set Default View</button>
                </div>

                <div className="setting-group mb-3">
                    <h6 className="mb-3">View limits:</h6>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Top</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Top" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Bottom</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Bottom" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Left</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Left" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Right</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Right" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Zoom min</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Zoom min" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Zoom max</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Zoom max" />
                    </div>

                    <button type="button" className="btn btn-link">Set View Limits</button>
                </div>                
            </div>
        )
    }
}

export default ViewSettings