import './Summary.css';
import React from "react";
import Information from "./Information"

function Summary() {

  return (
    <div className="Summary">
      <Information
        color='orange'
        summaryIcon='Icon'
        summaryText='Reaction'
        summaryNote={80}
      />
      <Information
        color='yellow'
        summaryIcon='Icon'
        summaryText='Memory'
        summaryNote={92}
      />
      <Information
        color='green'  
        summaryIcon='Icon'
        summaryText='Verbal'
        summaryNote={61}
      />
      <Information
        color='blue'
        summaryIcon='Icon'
        summaryText='Visual'
        summaryNote={72}
      />
    </div>
  );
}


export default Summary;
