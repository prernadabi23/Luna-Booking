import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem" >
         <img className="featuredImg" src="https://images.pexels.com/photos/673020/pexels-photo-673020.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img"></img>
         <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>234 properties</h2>
         </div>
         
      </div>
      <div className="featuredItem" >
         <img className="featuredImg" src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img"></img>
         <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>674 properties</h2>
         </div> 
      </div> 
    </div>
  )
}

export default Featured