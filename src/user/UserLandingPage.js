import AdminNavBar from "../admin/AdminNavBar"
import React from 'react';

import NoteAddModal from "./NoteAddModal";
import "./UserLandingPage.css"
export default function UserLandingPage({ setUserLoggedIn,note,setNote,setNotes,notes }) {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const aray = ['bnmnllkjlk', 'hbhkjhbjk']
    const handleDeleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
      };
    return (
        <>
            <AdminNavBar setAdminLoggedIn={setUserLoggedIn} myTask="My task" />
            <div className="user-container">
                <div style={{ fontSize: "1.5em", fontWeight: 500, }}>Notes</div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <input
                        type="search"
                        placeholder="Search"
                        className="search-user"
                        style={{ backgroundColor: "#f2f2f2", width: "90%" }}
                    />
                    <button className="search-button">Search</button>
                </div>
                <div className="add-note">
                    <button className="search-button add-button" onClick={handleOpen}>Add Note</button>
                </div>
               
                    {notes.map((para,index) => {
                        return (
                            <div className="note-container">
                                <div className="note">
                                    {para}
                                </div>
                                <input type="checkbox" id="myCheckbox"  />
                                <button className="search-button"  onClick={() => handleDeleteNote(index)} >Delete</button>
                            </div>
                            
                        )
                    })}

             
            </div>
                <NoteAddModal open={open} setOpen={setOpen} handleClose={handleClose} note={note} setNote={setNote} setNotes={setNotes}notes={notes}/>

        </>
    )
}

