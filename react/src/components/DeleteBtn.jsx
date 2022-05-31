import React from "react";
import { FaTrash } from "react-icons/fa";
import configData from "../config";
import { useNoteList } from "../contexts/NoteListContext";

function DeleteBtn(props) {
    const noteContext = useNoteList();
    const url = `${configData.SERVER_URL}/cards/${props.id}`;

    function refreshPage() {
        window.location.reload(false);
    }

    function onClick() {
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    let tempList = noteContext.noteList;
                    tempList = tempList.filter((note) => note._id !== props.id);
                    noteContext.setNoteList(tempList);
                    refreshPage();
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <button className="btn btn-danger" onClick={onClick}>
            <FaTrash />
        </button>
    );
}

export default DeleteBtn;
