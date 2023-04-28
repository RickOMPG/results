import React from "react";
import classNames from "classnames";

function Information(props) {

    const SummaryStyle = classNames ( "summary-item", {
        "summary--orange": props.color === "orange",
        "summary--yellow": props.color === "yellow",
        "summary--green": props.color === "green",
        "summary--blue": props.color === "blue",
    })

    const { summaryIcon, summaryText, summaryNote } = props;


    return (
        <div className={SummaryStyle}>
            <div className="summary-item__both">
                <div className='summary-item__icon'>{summaryIcon}</div>
                <p className='summary-item__text'>{summaryText}</p>
            </div>
        <p className='summary-item__note'>{summaryNote} <span> / 100</span></p>
        </div>
    );
}

export default Information;