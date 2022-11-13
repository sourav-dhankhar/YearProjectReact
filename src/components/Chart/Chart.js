import React from "react";
import Chartbar from "./Chartbar";

import './Chart.css';

const Chart = (props) => {
    const totalMaxValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxAmount = Math.max(...totalMaxValues);

    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) =>
                    <Chartbar key={dataPoint.label} value={dataPoint.value} maxValue={maxAmount} label={dataPoint.label} />
                )
            }
        </div>
    )
}


export default Chart;
