import './Summary.css';
import React from "react";
import Information from "./Information"

function Summary() {

  return (
    <div className="Summary">
      <Information
        color='orange'
        SummaryIcon='Icon'
        SummaryText='Reaction'
        SummaryNote='80/100'
      />
      <Information
        color='yellow'
        SummaryIcon='Icon'
        SummaryText='Memory'
        SummaryNote='92/100'
      />
      <Information
        color='green'  
        SummaryIcon='Icon'
        SummaryText='Verbal'
        SummaryNote='61/100'
      />
      <Information
        color='blue'
        SummaryIcon='Icon'
        SummaryText='Visual'
        SummaryNote='72/100'
      />
    </div>
  );
}


export default Summary;
