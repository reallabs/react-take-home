import React from 'react';
import PropTypes from 'prop-types'

const Offer = (props) => {
  const { id, campaign_name, campaign_icon_url, pay_per_install } = props;
  return (
    <div className="header-container" key={id}>
      <img className="campain-icon" src={campaign_icon_url} alt="Imag" />
      <div className="header-text">
        <h4>{campaign_name}</h4>
        <div className="header-pay">{pay_per_install}</div>
      </div>
      <div className="offer-body">
        
      </div>
    </div>
  )
}
Offer.propTypes = {
  id: PropTypes.number.isRequired,
  campaign_name: PropTypes.string.isRequired,
  campaign_icon_url: PropTypes.string.isRequired,
  pay_per_install: PropTypes.string.isRequired,
  // deleteUser: PropTypes.func.isRequired,
  // handleRemaind: PropTypes.func.isRequired,
  // remaind: PropTypes.bool,
}
export default Offer;
