import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {

  const [slideNumber,setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);


  const photos = [
    {
      src: "https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      src: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      src: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      src: "https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      src: "https://images.pexels.com/photos/2291624/pexels-photo-2291624.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      src: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];

  const handleOpen = (i)=> {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction)=> {
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"  onClick={()=> handleMove("l")}/> 
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg"></img>
            </div>
          <FontAwesomeIcon icon={faCircleArrowRight}  className="arrow" onClick={()=> handleMove("r")}/> 
       </div>}
        <div className="hotelWrapper">
        <button className="bookNow"> Reserve or book Now!</button>
           <h1 className="hotelTitle">Grand Hotel</h1>
           <div className="hotelAddress">
             <FontAwesomeIcon icon={faLocationDot} />
             <span>Elton St 125 New york</span>
           </div>
           <span className="hotelDistance"> Excellent location - 500m from center</span>
           <span className="hotelPriceHighlight">Book a saty over $345 at this property and get a free airport taxi</span>
           <div className="hotelImages">
             {photos.map((photo,i)=> (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg"></img>
              </div>
             ))}
           </div>
           <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Four Seasons Hotel Sydney</h1>
            <p className="hotelDesc">
             Overlooking Sydney Harbour, Four Seasons Hotel Sydney offers complimentary Premium WiFi, a bar, 
             restaurant, fitness centre and swimming pool. Situated in Sydney CBD (Central Business District)
             and the historic Rocks, it features luxurious rooms with panoramic views over the iconic Sydney Opera 
             House and Circular Quay.

             All rooms at Four Seasons Hotel Sydney have been carefully designed and subtly furnished with the highest quality 
             amenities. To enjoy the best views of Sydney’s harbour, the Deluxe Full Harbour Room and Four Seasons Full Harbour King
             Rooms both provide unobstructed views of the harbour. Complimentary access to Lounge 32 is available for all guests in a Four 
             Seasons Full Harbour King room and signature suites. Each room offers an LCD TV, slippers and Christian Lacroix toiletries.
             Chinese tea can be provided in the rooms upon request.
             </p>
             </div> 
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 5-night stay!</h1>
                <span> Location in teh heart of sydney, this property has an excellent location score of 9.8!</span>
                <h2><b>$988</b>(5 nights)</h2>
                <button>Reserve or book Now!</button>
             </div>
           </div>
        </div>
        <MailList /> 
        <Footer />
      </div>
    </div>
  )
}

export default Hotel