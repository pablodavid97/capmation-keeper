import React, { useContext, useState } from 'react';

const NoteListContext = React.createContext()

export function useNoteList() {
    return useContext(NoteListContext);
}
export function NoteListProvider({ children }) {
    const [noteList, setNoteList] = useState([])


    return (
        <NoteListContext.Provider value={{ noteList, setNoteList, }}>
            {children}
        </NoteListContext.Provider>
    );

}