import './Card.css'

function Card(props) {
  return (
    <div className="cardMain">
      <div className='card'>
        <div className="cardImage">
          <img src={props.item.imageUrl} alt="map" />
        </div>
        <div className="cardDetails">
          <span>Map</span>
          <h1>Location</h1>
          <p>dates</p>
          <p>description</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
