import { useState } from "react";

const Card = (props) => {
  const [image, setImage] = useState(props.imgURL);
  const handleError = () => {
    setImage(
      "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cosmetic-PNG/Sunscreen_Tube_PNG_Clipart_Picture.png?m=1507172109"
    );
  };
  return (
    <div className="sunscreen-card">
      <div className="sunscreen-name">{props.name}</div>
      <img
        className="sunscreen-card-image"
        src={image}
        alt={props.name}
        onError={handleError}
      />
      <div className="price">{`$${props.price}`}</div>
    </div>
  );
};

export default Card;

//on Error code source from  https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror