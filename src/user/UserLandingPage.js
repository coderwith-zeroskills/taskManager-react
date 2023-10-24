import AdminNavBar from "../admin/AdminNavBar"
import React, { useState } from 'react';

import NoteAddModal from "./NoteAddModal";
import "./UserLandingPage.css"
export default function UserLandingPage({ setUserLoggedIn, note, setNote, setNotes, notes }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDeleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };
    const filteredNotes = notes.filter((note) =>
        note.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <AdminNavBar setAdminLoggedIn={setUserLoggedIn} myTask="Nikhil" />
            <div className="user-container">
                <div style={{ fontSize: "1.5em", fontWeight: 500, padding: "10px" }}>Notes</div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <input
                        type="search"
                        placeholder="Search"
                        className="search-user"
                        style={{ backgroundColor: "#f2f2f2", width: "90%" }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* <button className="search-button">Search</button> */}
                </div>
                <div className="add-note">
                    <button className="search-button add-button" onClick={handleOpen}>Add Note</button>
                </div>
                {/* <hr></hr> */}
                <ul>
                    {filteredNotes.map((para, index) => {
                        return (
                            <li>
                                <div className="note-container" key={index}>
                                    <div className="note">
                                        {para}
                                    </div>
                                    <input type="checkbox" id="myCheckbox" />
                                    <button className="search-button" onClick={() => handleDeleteNote(index)} >Delete</button>
                                </div>
                                <hr></hr>
                            </li>

                        )
                    })}
                </ul>



            </div>
            <NoteAddModal open={open} setOpen={setOpen} handleClose={handleClose} note={note} setNote={setNote} setNotes={setNotes} notes={notes} />

        </>
    )
}

