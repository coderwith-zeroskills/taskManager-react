import logo from './logo.svg';
import { useEffect, useState } from 'react';
import LoginCard from './login/LoginCard';
import AdminLandingPage from "../src/admin/AdminLandingPage"
import UserLandingPage from "./user/UserLandingPage"
function App() {
  const admin={
    email:"admin@example.com",
    password:1234
  }
  const user={
    email:"nikhil@example.com",
    password:1234
  }
  const [credentials, setCredentials] = useState({})
  const [adminLoggedIn, setAdminLoggedIn] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  // common state foesending notes to admin too
  const [note, setNote] = useState(''); // Initialize the state for the current note
  const [notes, setNotes] = useState([]); // Initialize an array to store multiple notes
  useEffect(() => {
    if (credentials.email == admin.email && credentials.password == admin.password) {
      setAdminLoggedIn(true);
    }
    else if (credentials.email == user.email && credentials.password == user.password) {
      setUserLoggedIn(true);
    }
    else{
      alert("Wrong Credentials")
    }
    
  }, [credentials]);
  useEffect(()=>{
console.log(adminLoggedIn)
  },[adminLoggedIn])
  useEffect(()=>{
console.log(notes)
  },[notes])
  return (
    <>
    <div >
     { !adminLoggedIn&&!userLoggedIn&&<LoginCard setCredentials={setCredentials} />}  
    </div>
    <div>
     {adminLoggedIn?<AdminLandingPage setAdminLoggedIn={setAdminLoggedIn} notes={notes} setNotes={setNotes}/>:null}
    </div>
    <div>
     {userLoggedIn?<UserLandingPage setUserLoggedIn={setUserLoggedIn} note={note} setNote={setNote} setNotes={setNotes} notes={notes}/>:null}
    </div>
    
    </>
    
  );
}

export default App;
