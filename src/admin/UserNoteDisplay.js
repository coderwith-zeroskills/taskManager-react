export default function UserNoteDisplay({ userWiseNotes, handleDeleteNote }) {
    return (
      
        <div style={{  boxShadow: " 2px 2px 5px rgba(0, 0, 0, 0.2)",margin:"auto",padding:"2em",width:"fit-content",backgroundColor:"white" }}>
            <div style={{width:"fit-content"}}>
            <div className="note-container" style={{ backgroundColor: "GrayText",padding:"3px",width:"100%" }}>
                <div className="note" style={{ fontWeight: 500 }}>
                    Notes
                </div>
                <div style={{ marginRight: "18px", fontWeight: 500 }}>Action</div>
            </div>
            {userWiseNotes.map((para, index) => {
                return (
                    <>

                        <div className="note-container">
                            <div className="note">
                                {para}
                            </div>
                            <button className="search-button" onClick={() => handleDeleteNote(index)} >Delete</button>
                        </div>
                    </>


                )
            })}
            </div>
           
        </div>

    )
}