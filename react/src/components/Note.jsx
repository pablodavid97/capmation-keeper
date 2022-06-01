import React from "react";
import DeleteBtn from "./DeleteBtn";

function Note(props) {
    return (
        <div className="note">
            <DeleteBtn id={props.id} />
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    );
}

export default Note;
