import React, { Component } from 'react';


class SearchTitle extends Component {

	constructor(props){
		super(props)
		this.state = {
			searchInput: ''
		}
	}

	onChange(e) {
		this.setState({searchInput: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault()
		fetch("https://matilda.whooosreading.org/api/v1/search?q=" + this.state.searchInput)
		.then(serverResponse => {
			return serverResponse.json()
		}).then( data => {
			// 1) pass date.result up to updateResults function in app.js, where it arrives as props, puts data.results into state
			// 2) Display component gets data.results from the updated state, displays length to confirm
			this.props.onSearch(data.results)
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input value={this.state.searchInput} onChange={this.onChange.bind(this)}
						type="text" placeholder="Search" />
					<button type="submit">Search</button>
				</form>
			</div>
		)
	}
}

export default SearchTitle
