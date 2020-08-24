import React from 'react'; 

class AirportSearch extends React.Component {
    render() {
      return <div className="container">
       <div className="filter_search_sec">
      <div className="row">
      <div className="col-md-8">
        <div className="filter_type">
          <h2>Type</h2> 
            <form>
              <div className="form-group">
                <input type="checkbox" id="Small" />
                <label htmlFor="Small">Small</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="Medium" />
                <label htmlFor="Medium">Medium</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="Large" />
                <label htmlFor="Large">Large</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="Heliport" />
                <label htmlFor="Heliport">Heliport</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="Closed" />
                <label htmlFor="Closed">Closed</label>
              </div>
              <div className="form-group">
                <input type="checkbox" id="In your Favorites" />
                <label htmlFor="In your Favorites">In your Favorites</label>
              </div>
            </form> 
        </div>
      </div>
      <div className="col-md-4">
        <div className="filter_search">
          <h2>Filter by Search</h2>
          <input type="text" placeholder="Search here" />
        </div>  
      </div>
      </div>
    </div> 
    </div> 
    }
  }

export default AirportSearch;


