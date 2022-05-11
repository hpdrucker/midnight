import {Carousel} from '3d-react-carousal';
import React from 'react'
/* import IMAGES from './images/index.js' */

let slides = new Array();

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); 
  slides[index] = <img className="carousel-images" src={r(item)} alt="0" />
});
 return images
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


const Carousal = () => {
  return (
    <div className="carousel-container" id="cc">
      <Carousel slides={slides} autoplay={true} interval={3000}/>
    </div>
    
  )
}

export default Carousal