import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tree from './Components/tree.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
    this.getData = this.getData.bind(this);
  }

  getData(){
    fetch('https://raw.githubusercontent.com/hyperscience/interview-problems/master/treedata.json')
    .then(res => res.json())
    .then(json => {
        var structuredData = [];
        var data = json.data.split('\n');
        for (let i = 0; i < data.length-1; i++) {
            let element = data[i];
            element = element.split('/');
            element.shift();
            structuredData.push(element);
        }
        console.log(json.data);
        console.log(structuredData);

        var sortedData = [];
        var dataArr = [];
        for (let i = 0; i < structuredData.length; i++) {
          const array = structuredData[i];
          if (dataArr[0] !== structuredData[i][0]) {
            dataArr.push(structuredData[i][0]);
          }
        }
        sortedData.push(dataArr)
        dataArr = [];

        for (let i = 0; i < structuredData.length; i++) {
          const element = structuredData[i];
          if (structuredData[i][1]) {
            if (element[0] === structuredData[0][i]) {
              dataArr.push(structuredData[i][1])
            }
          }
        }
        sortedData.push(dataArr)
        console.log(sortedData);

        this.setState({data: structuredData});
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <div>
          <Tree data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
