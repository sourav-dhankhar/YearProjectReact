import React from "react";
import './Chartbar.css';

const Chartbar = (props) => {
    let barFilHeight = '0%';
    if (props.value > 0) {
        barFilHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFilHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default Chartbar;