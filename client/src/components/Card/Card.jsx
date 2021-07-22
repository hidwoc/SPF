const Card = (props) => {
  return (
    <div className="sunscreen-card">
      <div className="sunscreen-name">{props.name}</div>
      <img
        className="sunscreen-card-image"
        src={props.imgURL}
        alt={props.name}
      />
      <div className="price">{`$${props.price}`}</div>
    </div>
  );
};

export default Card;
