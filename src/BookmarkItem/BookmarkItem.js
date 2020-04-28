import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './BookmarkItem.css';

export default class BookmarkItem extends Component {

  render() {
  return (
    <li className='BookmarkItem'>
      <div className='BookmarkItem__row'>
        <h3 className='BookmarkItem__title'>
          <a
            href={this.props.url}
            target='_blank'
            rel='noopener noreferrer'>
            {this.props.title}
          </a>
        </h3>
        <Rating value={this.props.rating} />
      </div>
      <p className='BookmarkItem__description'>
        {this.props.description}
      </p>
      <div className='BookmarkItem__buttons'>
        <button
          className='BookmarkItem__description'
          onClick={() => this.props.onClickDelete(this.props.id)}
        >
          Delete
        </button>
        <Link
          className='BookmarkItem__description'
          to={`/edit/${this.props.id}`}
        >
          Edit
        </Link>
      </div>
    </li>

  )}
}

BookmarkItem.defaultProps = {
  onClickDelete: () => {console.log('delete clicked')},
}
