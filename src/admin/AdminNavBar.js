import "./AdminNavBar.css"

export default function AdminNavBar({setAdminLoggedIn,myTask}){
    return(
        <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            GoTask.com
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          {/* <a href="//github.io/jo_geek" target="_blank">Github</a> */}
          {/* <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a> */}
          <a className="anchor">{myTask}</a>
          {/* <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a> */}
          <a className="anchor" onClick={()=>setAdminLoggedIn(false)}>Log Out</a>
        </div>
      </div>
    )
}