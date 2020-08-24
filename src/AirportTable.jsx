import React from 'react'; 
import ReactPaginate from 'react-paginate';

import * as dataJson from './data/testdata.json';

class AirportTable extends React.Component {

  constructor(props){
    super(props);
    this.state={
      dataTable: dataJson,
      offset: 0
    }
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function(){
    return Object.keys(this.state.dataTable.default);
  }
  
  getHeader = function(){
    var keys = this.getKeys();
    return keys.map((key, index)=>{
      return <th key={key}>{key.toUpperCase()}</th>
    })
  }
  
  getRowsData = function(){
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index)=>{
      return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
  }

  loadNewDataSet = () => {
    this.setState({
      data: dataJson,
      pageCount: 1
    });
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);

    this.setState({ offset: offset }, () => {
      this.loadNewDataSet(offset);
    });
  };
    render() {
      return <div className="container"> 
                <div className="filter_table">
                <table>
                  <thead>
                    <tr>{this.getHeader()}</tr>
                  </thead>
                  <tbody>
                    {this.getRowsData()}
                  </tbody>
                </table>
              </div> 
              
              <div className="footer_pagination">
                <ReactPaginate 
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={this.handlePageClick}
                />
             </div> 
             </div>
    }
  }

  const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
      return <td key={props.data[key]}>{props.data[key]}</td>
    })
  }

export default AirportTable;


