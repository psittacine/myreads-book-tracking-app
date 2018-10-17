import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

class Book extends React.Component {
	/*
    componentDidMount() {
		console.log(this);
	}
 */

	render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url("${(this.props.book.imageLinks &&
									this.props.book.imageLinks.thumbnail) ||
									""}")`
							}}
						/>
						<div className="book-shelf-changer">
							<select
								value={this.props.book.shelf || "none"}
								onChange={event => {
									this.props.updateBook(this.props.book, event.target.value);
								}}
							>
								<option value="move" disabled>
									Move to...
								</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">
						{this.props.book.title || "Untitled"}
					</div>
					<div className="book-authors">
						{this.props.book.authors[0] || "Anonymous"}
					</div>
				</div>
			</li>
		);
	}
}

export default Book;
