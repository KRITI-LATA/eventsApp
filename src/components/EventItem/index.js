// Write your code here
import './index.css'

const eventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventImageByClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-list">
      <button className="event-button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageByClassName} />
      </button>
      <p className="events-name">{name}</p>
      <p className="event-country">{location}</p>
    </li>
  )
}

export default eventItem
