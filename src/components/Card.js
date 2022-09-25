import './Card.css'

function Card(props) {
  return (
    <div className="cardMain">
      <div className="card">
        <div>
          <img src={props.item.imageUrl} alt="map"  className="cardImage" />
        </div>
        <div className="cardDetails">
          <span className='cardLocationDetails'>
          <i class="fa-solid fa-location-dot"></i>
          <p>J A P A N</p>
          <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer" className='detailsLink'>View on Google Maps</a>
          </span>
          <h1>{props.item.location}</h1>
          <p>{props.item.startDate} - {props.item.endDate}</p>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
