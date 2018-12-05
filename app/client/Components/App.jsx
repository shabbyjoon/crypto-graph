import React from 'react';
import axios from 'axios';
import Chart from './Chart.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cryptoData: {}
    }
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getData();
  }


  getData() {
    axios
      .get('/bitcoin')
      .then(response => {
        console.log('get request', response.data)
        this.setState({
          cryptoData : response.data.bpi
        })
      })
      .catch(error => console.log(error))
  }

  render(){
    return(
      <div> 
         <Chart data={this.state.cryptoData}/>
      </div>
    )
  }
}

export default App;

