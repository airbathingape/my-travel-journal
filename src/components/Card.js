import './Card.css'

function Card(props) {
  return (
    <div className="cardMain">
      <div className='card'>
        <div className="cardImage">
          <img src={props.item.imageUrl} alt="map" />
        </div>
        <div className="cardDetails">
          <span>
          <i class="fa-solid fa-location-dot"></i>
          <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
          </span>
          <h1>{props.item.location}</h1>
          <p>{props.item.startDate} - {props.item.endDate}</p>
          <p>{props.item.description}</p>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Card;
