import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import "./UserLandingPage.css"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
export default function NoteAddModal({open,setOpen,handleClose,note,setNote,setNotes,notes}){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const handleNoteChange = (event) => {
        setNote(event.target.value); // Update the current note state as the user types
      };
   
      const handleSaveNote = () => {
        if (note.trim() !== '') {
          // Only save non-empty notes
        
          setNotes([...notes, note]); // Add the current note to the array of notes
          setNote(''); // Clear the input field
          handleClose()
        }
        else{
          alert("Note can't be empty")
        }
      };
      return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Note
          </Typography>
          <input
            type='text'
            style={{ width: "100%" }}
            value={note}
            onChange={handleNoteChange}
          />
          <div>
            <button className='search-button' style={{ marginTop: "10px" }} onClick={handleSaveNote}>
              Save
            </button>
          </div>
    
          {/* Display the list of saved notes */}
          
        </Box>
        </Modal>
      );
    }