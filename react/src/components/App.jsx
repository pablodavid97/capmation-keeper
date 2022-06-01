import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteList from "./NoteList";
import CreateForm from "./CreateForm";
import { NoteListProvider } from "../contexts/NoteListContext";

function App() {
    return (
        <NoteListProvider>
            <Header />
            <CreateForm />
            <NoteList />
            <Footer />
        </NoteListProvider>
    );
}

export default App;
