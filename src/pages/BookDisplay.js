import React, { Component } from 'react';

class BookDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      text: ''
    };
  }


show = function(){
    this.setState({
      editing: true
    })

  if (this.state.editing) {
    return (
      <div>
         <textarea ref="newText" defaultValue="Edit me"></textarea>
         <button onClick={this.hide}>Save</button>
      </div>
    )
  }
}

hide = function(){
  this.setState({
    editing: false
  })
}

  render () {
    let book = this.props.book
    let lexile = book.lexile_score
  	if (lexile == null){
  		lexile= 'no information'
  	}
  	let variety= book.text_variety
  	if (variety == null){
  		variety= 'no information'
  	}
    return (
			<div className="Display">
				<p>Title: {book.title}</p>
				<p>Author: {book.author_full_name}</p>
				<p>Lexile: {lexile}</p>
				<p>Text Variety: {variety}</p>
				<img src={book.cover_url} />
        <button onClick={this.show}>Edit</button>
			</div>
		)
  }
}

export default BookDisplay
