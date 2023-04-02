import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
       <div className="navContainer">
            <span className="logo">goLuna</span>
            <div className="navitems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button> 
            </div>
       </div>
    </div>
  )
}

export default Navbar