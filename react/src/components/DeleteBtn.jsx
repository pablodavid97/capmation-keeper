import React, {useState} from "react";
import { FaTrash } from "react-icons/fa";
import configData from "../config";
import { useNoteList } from "../contexts/NoteListContext";

function DeleteBtn(props) {
    const noteContext = useNoteList();
    const url = `${configData.SERVER_URL}/cards/${props.id}`;
    const [showBtn, setShowBtn] = useState(false);
    const showStyle = {color: '#e46b6b'};
    const hideStyle = {color: '#ffe3a7'};

    function handleOnMouseEnter() {
        console.log('entra');
        setShowBtn(true);
    }

    function handleOnMOuseLeave() {
        console.log('sale');
        setShowBtn(false);
    }

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
        <button className="btn btn-danger delete-btn" onClick={onClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMOuseLeave} style={showBtn ? showStyle : hideStyle}>
            <FaTrash />
        </button>
    );
}

export default DeleteBtn;
