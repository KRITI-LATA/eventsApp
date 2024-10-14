// Write your code here
import './index.css'

const registrationStatus = {
  registrationClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
  yetToRegistered: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="view-container">
      <img
        className="reg-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
      />
      <h1 className="closed-text">Registrations Are Closed Now!</h1>
      <p className="reg-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )
  const renderRegistrationView = () => (
    <div className="view-container">
      <img
        className="register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.Seeing
        dance can often make you fall totally in love with this beautiful art
        form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisterdView = () => (
    <div className="view-container">
      <img
        className="already-registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registration-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      case registrationStatus.registered:
        return renderRegisterdView()
      case registrationStatus.yetToRegistered:
        return renderRegistrationView()
      default:
        return renderNoActiveEventView()
    }
  }
  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
