import React from 'react';
import { Line } from 'react-chartjs-2';

class DataChart extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { data } = this.props; 
    let dates = Object.keys(data);
    let prices = Object.values(data);
    console.log('data passed as prices', prices) 
    console.log('data passed as dates', dates) 
    data = {
        labels: dates,
        dataSets: [
          {
            label: 'Bitcoin prices',
            data: prices
          }
        ]
      } 
    if (dates.length === 0) {
      return <div>Loading Chart</div>
    }
    return(
      <div>
        <Line 
          data={data}/>
        <h5>Powered By Coinbase</h5>
      </div>
    )
  }
}

export default DataChart;