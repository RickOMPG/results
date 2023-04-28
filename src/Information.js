import React from "react";
import classNames from "classnames";

function Information(props) {

    const SummaryStyle = classNames ( "Summary-item", {
        "Summary--orange": props.color === "orange",
        "Summary--yellow": props.color === "yellow",
        "Summary--green": props.color === "green",
        "Summary--blue": props.color === "blue",
    })

    const { summaryIcon, summaryText, summaryNote } = props;


    return (
        <div className={SummaryStyle}>
            <div className="Summary-item__both">
                <div className='Summary-item__icon'>{summaryIcon}</div>
                <p className='Summary-item__text'>{summaryText}</p>
            </div>
        <p className='Summary-item__note'>{summaryNote} <span> / 100</span></p>
        </div>
    );
}

export default Information;