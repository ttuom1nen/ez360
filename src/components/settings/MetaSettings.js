import React from "react"

class MetaSettings extends React.Component{
    render(){
        return(
            <div className="settings-panel">
             <h4 className="mb-3">Scene Settings</h4>

                <div className="setting-group">
                    <label>Scene Name</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
                    </div>
                </div>

            </div>
        )
    }
}

export default MetaSettings