import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";


const Header = () => {
  return (
    <div className="header">
      <div className="headerContaineer" >
        <div className="headerlist"> 
           <div className="headerlistItem">
           <FontAwesomeIcon icon={faBed} />
           <span>Stays</span>
           </div>
           <div className="headerlistItem">
           <FontAwesomeIcon icon={faPlane} />
           <span>Flights</span>
           </div>
           <div className="headerlistItem">
           <FontAwesomeIcon icon={faCar} />
           <span>Car rentals</span>
           </div>
           <div className="headerlistItem">
           <FontAwesomeIcon icon={faBed} />
           <span>Attractions</span>
           </div>
           <div className="headerlistItem">
           <FontAwesomeIcon icon={faTaxi} />
           <span>Airport taxis</span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Header