import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
           <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="pListImg"></img>
           <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>703 hotels</h2>
           </div>
        </div>
        <div className="pListItem">
           <img src="https://images.pexels.com/photos/1488327/pexels-photo-1488327.png?auto=compress&cs=tinysrgb&w=1600" alt="" className="pListImg"></img>
           <div className="pListTitles">
            <h1>Villas</h1>
            <h2>234 hotels</h2>
           </div>
        </div>
        <div className="pListItem">
           <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="pListImg"></img>
           <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>903 hotels</h2>
           </div>
        </div>
        <div className="pListItem">
           <img src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="pListImg"></img>
           <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>321 hotels</h2>
           </div>
        </div>
        <div className="pListItem">
           <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="pListImg"></img>
           <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>563 hotels</h2>
           </div>
        </div>
    </div>
  )
}

export default PropertyList