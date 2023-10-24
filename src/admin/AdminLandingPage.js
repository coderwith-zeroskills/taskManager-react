import { useState } from "react";
import "../user/UserLandingPage.css"
import "./AdminLandingPage.css"
import AdminNavBar from "./AdminNavBar"
import UserNoteDisplay from "./UserNoteDisplay";
export default function AdminLandingPage({ setAdminLoggedIn,notes,setNotes }) {
    // change to check on gitHub
    const users = ['User 1', 'User 2', 'User 3']
    const [activeUser, setActiveUser] = useState("User 1");
    const handleUserClick = (user) => {
        if(user=="User 1"){
        setUserWiseNotes(notes)

        }
        else{

            setUserWiseNotes([])
        }
        setActiveUser(user);
    };
    const handleDeleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
      };
      const[userWiseNotes,setUserWiseNotes]=useState(notes)
    return (
        <>
            <AdminNavBar setAdminLoggedIn={setAdminLoggedIn} myTask="Users" />

            <div className="admin-container">
                <div style={{marginLeft:"10px"}}>Select User</div>
                <ul>
                    {users.map((user,index) => {
                        return (
                            <li key={index}>
                            <button style={{cursor:"pointer"}} className={`user-button ${activeUser === user ? 'active' : ''}`}
                                onClick={() => handleUserClick(user)}>{user}</button>
                        </li>
                        )
                    })}

                </ul>

               <UserNoteDisplay userWiseNotes={userWiseNotes} handleDeleteNote={handleDeleteNote}/>
            </div>
        </>




    )
}