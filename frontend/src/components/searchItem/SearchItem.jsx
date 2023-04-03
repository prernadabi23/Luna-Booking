import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="siImg"></img>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartment</h1>
            <span className="siDistance">200m from center</span>
            <span className="siTaxiOp"> Free airport Taxi</span>
            <span className="siSubTitle"> Studio Apartment with Air conditioning</span>
            <span className="siFeatures"> Entire studio * 1 bathroom * 21m² 1 full bed</span>
            <span className="siCancelOp"> Free cancellation</span>
            <span className="siCancelopSubtitle"> You can cancel later, so lock in this great price today !</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$324</span>
                <span className="siTaxOp"> Includes taxes and fees</span>
                <button className="siCheckButton"> See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem