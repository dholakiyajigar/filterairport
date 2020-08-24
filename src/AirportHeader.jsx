

import React from 'react';   
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class AirportHeader extends React.Component {
    render() {
      return <div className="container">
      <div className="flight_header">
      <h1> Filter <span>airports</span></h1>
      <div className="side_icon">
         {/* <i className="fa fa-th-large"></i> */}
         {/* <FontAwesomeIcon icon={['fal', 'coffee']} />  */}
         <FontAwesomeIcon icon={faThLarge} />
      </div>
      </div>
    </div>
    }
  }

export default AirportHeader;
