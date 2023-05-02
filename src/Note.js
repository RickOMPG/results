import React from "react";

function Note() {

    return (
        <div className="note">
            <span className="note-title">Your Result</span>
            <div className="note-grade">
                <span>76</span> of 100
            </div>
            <div className="note-subtext">
                <span>Great</span>
                <p>You scored higher than 65% of the people who have taken those tests.</p>
            </div>
        </div>
    );


}

export default Note;