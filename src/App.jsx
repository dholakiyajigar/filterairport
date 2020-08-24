import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AirportHeader from './AirportHeader';
import AirportSearch from './AirportSearch'; 
import AirportTable from './AirportTable'; 
import './App.css'; 

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return <div className="App">
       <AirportHeader/>
       <AirportSearch/> 
       <AirportTable/> 
    </div>
  }
}

export default App;
