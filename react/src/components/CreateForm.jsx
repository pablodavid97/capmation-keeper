import React, { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import configData from "../config";

function CreateForm() {
    const [formStateOpen, setFormStateOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const url = `${configData.SERVER_URL}/cards/`;

    function closeForm() {
        setFormStateOpen(false);
    }

    function openForm() {
        setFormStateOpen(true);
    }

    function createNote() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, text }),
        };
        fetch(url, requestOptions).then((response) => response.json());
    }

    return (
        <div>
            <div
                className="form-popup"
                id="createForm"
                style={
                    formStateOpen ? { display: "flex" } : { display: "none" }
                }
            >
                <form action="/action_page.php" className="form-container">
                    <button className="btn close-btn" onClick={closeForm}>
                        <FaTimesCircle />
                    </button>
                    <h1>Add New Note</h1>
                    <div className="input">
                        <label className="input-lbl" htmlFor="title">
                            <b>Title: </b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Note Title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="input">
                        <label className="input-lbl" htmlFor="text">
                            <b>Text: </b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Note Text"
                            name="title"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                        ></input>
                    </div>

                    <div className="btn-container">
                        <button type="submit" className="btn" onClick={createNote}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <button
                className="btn new-btn"
                onClick={openForm}
                style={
                    formStateOpen ? { display: "none" } : { display: "flex" }
                }
            >
                <FaPlusCircle />
            </button>
        </div>
    );
}

export default CreateForm;
