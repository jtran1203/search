import React, { Component } from 'react';
import BookDisplay from './BookDisplay';


class Display extends Component {

	render (){
		var data = this.props.books
		var resultDisplay = data.map( (book,key)=>{
			return (
			<BookDisplay book = {book} />
		)}
		)
		return (
			<div>
			{resultDisplay}

			</div>
		)
	}
}

export default Display
