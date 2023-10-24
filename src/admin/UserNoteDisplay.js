export default function UserNoteDisplay({ userWiseNotes, handleDeleteNote }) {
    return (
        <>

            <div className="note-container" style={{ backgroundColor: "GrayText" }}>
                <div className="note" style={{fontWeight:500}}>
                    Notes
                </div>
                <div style={{ marginRight: "30px",fontWeight:500}}>Button</div>
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
            })}</>

    )
}