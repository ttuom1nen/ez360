import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

window.editor = {}
window.editor.player = window.pannellum.viewer('pano-container',
    {
    "default": {
        "firstScene": "",
        "author": "TT",
        "sceneFadeDuration": 1000
    },

});