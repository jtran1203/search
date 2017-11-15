import React, { Component } from 'react';
import './App.css';
import SearchTitle from './pages/SearchTitle'
import Display from './pages/Display'
class App extends Component {

constructor(props) {
  	super(props);
  	this.state = {
		results: []
	}
}
	updateResults(newResults){
   	this.setState({results: newResults})
 }
	render(){
  		return(
			<div>
				<SearchTitle onSearch = {this.updateResults.bind(this)}/>
				<Display books = {this.state.results} />
			</div>
  		)
	}
}


export default App;
