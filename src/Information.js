import React from "react";
import classNames from "classnames";

function Information(props) {

    const SummaryStyle = classNames ({
        "Summary-item": true,
        "Summary-item__orange": props.color === "orange",
        "Summary-item__yellow": props.color === "yellow",
        "Summary-item__green": props.color === "green",
        "Summary-item__blue": props.color === "blue",
    })


    let SummaryIcon = props.SummaryIcon;
    let SummaryText = props.SummaryText;
    let SummaryNote = props.SummaryNote;


    return (
        <div className={SummaryStyle}>
            <div className="Summary-item__both">
                <div className='Summary-item__icon'>{SummaryIcon}</div>
                <p className='Summary-item__text'>{SummaryText}</p>
            </div>
        <p className='Summary-item__note'>{SummaryNote}</p>
        </div>
    );
}

export default Information;