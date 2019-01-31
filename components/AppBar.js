import React from "react";

const AppBar=({onOpenMenu})=>(
    <div className="app-bar">
        <div className="app-bar__container">
            <button onClick={onOpenMenu}>
                <i className="material-icons">menu</i>
            </button>
        </div>
    </div>
);

export default AppBar;