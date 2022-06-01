import React, { useEffect, useState } from "react";
import Note from "./Note";
import configData from "../config.json";
import { useNoteList } from "../contexts/NoteListContext";

function List() {
    const noteContext = useNoteList();
    const [list, setList] = useState([]);
    const url = `${configData.SERVER_URL}/cards`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(setList);
    }, []);

    noteContext.setNoteList(list);
    return (
        <div className="notelist-container">
            {noteContext.noteList.map((note) => (
                <Note
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    text={note.text}
                />
            ))}
        </div>
    );
}

export default List;
